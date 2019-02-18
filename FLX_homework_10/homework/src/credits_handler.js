/* Your code goes here */

let balanceError = 'Sorry! Not enough balance for the operation.';
let limitError = 'Sorry! Yours transaction limit does not allow an operation.';
function Operation(type, amount) {
  this.operationType = type;
  this.credits = amount;
  this.operationTime = new Date().toLocaleString('en-GB');
}

function userCard(number) {
  return {
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: number,
    getCardOptions: function () {
      return {
        balance: this.balance,
        historyLogs: this.historyLogs,
        key: this.key,
        transactionLimit: this.transactionLimit
      };
    },
    putCredits: function (pCredits) {
      this.balance += pCredits;
      this.historyLogs.push(new Operation('Received credits', pCredits));
    },
    takeCredits: function (tCredits) {
      if (tCredits > this.balance) {
        console.error(balanceError);
        return;
      } else if (tCredits > this.transactionLimit) {
        console.error(limitError);
        return;
      }
      this.balance -= tCredits;
      this.historyLogs.push(new Operation('Withdrawal of credits', tCredits));
    },
    setTransactionLimit: function (tLimit) {
      this.transactionLimit = tLimit;
      this.historyLogs.push(new Operation('Transaction limit change', tLimit));
    },
    transferCredits: function (credits, card) {
      let taxeRate = 0.005;
      let taxe = credits * taxeRate;
      if (credits + taxe > this.balance) {
        console.error(balanceError);
        return;
      } else if (credits > this.transactionLimit) {
        console.error(limitError);
        return;
      }
      this.balance -= credits + taxe;
      card.putCredits(credits);
      this.historyLogs.push(new Operation('Withdrawal of credits', credits + taxe));
    }
  };
}

function UserAccount(name) {
  this.name = name,
  this.cards = [],
  this.addCard = function() {
    let maxNumberUserCards = 3;
    if (this.cards.length < maxNumberUserCards) {
      this.cards.push(userCard(this.cards.length+1));
    }
  };
  this.getCardByKey = function(number) {
    return this.cards[number-1];
  };
}

