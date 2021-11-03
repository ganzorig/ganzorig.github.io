const accountListInfo = [];

// account module
const account = (function () {
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
  const accountName = document.getElementById('account-name');
  const deposit = document.getElementById('deposit');
  const textarea = document.getElementById('log');

  accountListInfo.push(
    account.createAccount(accountName.value.trim(), deposit.value.trim())
  );

  if (accountName === '' || deposit === '') {
    return alert('Insert account name and deposit value!!');
  }

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
