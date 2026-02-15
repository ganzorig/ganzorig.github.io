function calcTip() {
  const subTotal = parseInt(document.getElementById('subtotal').value);
  const tip = parseInt(document.getElementById('tip').value);

  if (!subTotal || typeof subTotal !== 'number') {
    alert('Insert total amount as a number!!');
    return;
  }

  if (!tip || typeof subTotal !== 'number') {
    alert('Insert tip percent as a number!!');
    return;
  }

  const total = subTotal + (subTotal * tip) / 100;

  document.getElementById('total').innerText = '$' + total;
}
