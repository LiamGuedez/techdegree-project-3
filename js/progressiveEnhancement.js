const progressiveEnhancement = () =>
{
  const otherField = document.querySelector('#other-title');
  const ccField = document.querySelector('#credit-card');
  const paypal = document.querySelector('#paypal');
  const bitcoin = document.querySelector('#bitcoin');

  window.onload = () =>
  {
    otherField.style.display = 'block';
    ccField.style.display = 'block';
    paypal.style.display = 'block';
    bitcoin.style.display = 'block';
  }
}
