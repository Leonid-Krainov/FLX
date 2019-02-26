const rootNode = document.getElementById('root');

const todoItems = [{
  isDone: false,
  id: 12345,
  description: 'Todo 1'
}];

// Your code goes here

let creator = function (tag, text) {
  let created = document.createElement(tag);
  created.innerHTML = text;
  return created;
};

let mainPage = function () {
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  let title = creator('h2', 'Simple TODO application');
  rootNode.appendChild(title);
  let button = creator('button', '');
  rootNode.appendChild(button);
  let linkTo2 = creator('a', 'Add new task');
  linkTo2.setAttribute('href', '#/addNew/' + todoItems.length);
  button.appendChild(linkTo2);
  let emptyText = creator('p', 'TODO is empty');
  rootNode.appendChild(emptyText);
  let minimalLength = 0;
  if (todoItems.length > minimalLength) {
    emptyText.setAttribute('class', 'hidden');
    let list = creator('ul', '');
    rootNode.appendChild(list);
    let i = 0;
    for (; i < todoItems.length; i++) {
      let item = creator('li','');
      item.setAttribute('id',i);
      rootNode.appendChild(item);
      let check = creator('button', '');
      item.appendChild(check);
      check.setAttribute('class', todoItems[i].isDone);
      check.addEventListener('click', function (i) {
        check.removeAttribute('class', todoItems[check.parentNode.id].isDone);
        todoItems[check.parentNode.id].isDone = true;
        check.setAttribute('class', todoItems[check.parentNode.id].isDone);
      });
      let p = creator('p', todoItems[i].description);
      item.appendChild(p);
      let del = creator('button', '');
      del.setAttribute('class','remove');
      del.addEventListener('click', function () {
        item.parentNode.removeChild(item);
        if (todoItems.length) {
          emptyText.removeAttribute('class', 'hidden');
        }
      });
      item.appendChild(del);
    }
  } else {
    emptyText.removeAttribute('class', 'hidden');
  }
};
mainPage();

let addNew = function (suffix) {
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  let title = creator('h2', 'Add task');
  rootNode.appendChild(title);
  let input = creator('input', '');
  rootNode.appendChild(input);
  let div = creator('div', '');
  rootNode.appendChild(div);
  let buttonC = creator('button', '');
  div.appendChild(buttonC);
  let linkTo1 = creator('a', 'Cancel');
  linkTo1.setAttribute('href', '#');
  buttonC.appendChild(linkTo1);
  let buttonS = creator('button', 'Save changes');
  div.appendChild(buttonS);
  buttonS.onclick = function () {
    let item = {
      isDone: false,
      id: suffix,
      description: input.value
    };
    todoItems.push(item);
    mainPage();
  };
};
let modifyPage = function (li) {
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  let title = creator('h2', 'Modify item');
  rootNode.appendChild(title);
  let input = creator('input', '');
  rootNode.appendChild(input);
  let div = creator('div', '');
  rootNode.appendChild(div);
  let buttonC = creator('button', '');
  div.appendChild(buttonC);
  let linkTo1 = creator('a', 'Cancel');
  linkTo1.setAttribute('href', '#');
  buttonC.appendChild(linkTo1);
  let buttonS = creator('button', 'Save changes');
  div.appendChild(buttonS);
  buttonS.appendChild(linkTo1);
  buttonS.onclick = function () {
    let item = [{
      isDone: false,
      id: todoItems.length,
      description: input.value
    }];
  };
};

function locationHashChanged() {
  if (location.hash === '#/addNew/' + todoItems.length) {
    addNew(todoItems.length);
  } else if (location.hash === '#modifyPage') {
    modifyPage();
  } else {
    mainPage();
  }
}
window.onhashchange = locationHashChanged;



//rootNode.appendChild( /* Append your list item node*/ );