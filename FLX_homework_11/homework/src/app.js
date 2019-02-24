let rootNode = document.getElementById('root');

// Your code goes here
let taskLimit = 10;
let iNotComplete = function () {
  let i = document.createElement('i');
  i.setAttribute('class', 'material-icons');
  i.innerHTML = 'check_box_outline_blank';
  return i;
};
let iDelete = function () {
  let i = document.createElement('i');
  i.setAttribute('class', 'material-icons');
  i.innerHTML = 'delete';
  return i;
};
let input = document.getElementById('input');
let addBox = document.getElementById('add_box');
let ul = document.getElementById('list');

let dragSrcEl = null;
function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
function dragEnter(e) {
  this.classList.add('over');
}
function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}
function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}
function dragDrop(e) {
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}
function dragEnd(e) {
  let listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}
function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

let newLi = function (data) {
  if (document.getElementsByTagName('li').length < taskLimit) {
    document.getElementById('notification').innerHTML = '';
    let li = document.createElement('li');
    li.setAttribute('draggable', 'true');
    addEventsDragAndDrop(li);
    ul.appendChild(li);
    let p = document.createElement('p');
    let iCheckBox = li.appendChild(iNotComplete());
    iCheckBox.addEventListener('click', function () {
      iCheckBox.innerHTML = 'check_box';
    });
    li.appendChild(p).innerHTML = data;
    input.value = null;
    let iDel = li.appendChild(iDelete());
    iDel.addEventListener('click', function(){
      li.parentNode.removeChild(li);
    });
  } else {
    document.getElementById('notification').innerHTML = 'Maximum item per list are created';
    input.value = null;
  }
};
addBox.addEventListener('click', function () {
  if (input.value !== '') {
    return newLi(input.value);
  }
});
