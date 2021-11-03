const accountListInfo = [];

// account module
const account = (function () {
  'use strict';
  function Account(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  function createAccount(accountName, deposit) {
    return new Account(accountName, deposit);
  }

  return { createAccount };
})();

function onClick() {
  'use strict';
  const accountName = document.getElementById('account-name');
  const deposit = document.getElementById('deposit');
  const textarea = document.getElementById('log');

  if (accountName.value === '' || deposit.value === '') {
    return alert('Insert account name and deposit value!!');
  }

  accountListInfo.push(
    account.createAccount(accountName.value.trim(), deposit.value.trim())
  );

  textarea.innerHTML = '';
  accountListInfo.forEach((element) => {
    textarea.innerHTML +=
      'Account Name: ' + element.name + ', Balance: $' + element.balance + '\n';
  });

  // clear inputs and focus
  accountName.value = '';
  accountName.focus();
  deposit.value = '';
}

window.onload = function () {
  'use strict';
  document.getElementById('create').onclick = onClick;
};
