//on page load, start with the first field selected
window.onload = () =>
{
  const nameField = document.querySelector('#name');
  nameField.focus();
}

addOtherJobTextField();
addTshirtFunctionality();
addActivitiesFunctionality();
addPaymentFunctionality();
formValidation();
errorMessages();
progressiveEnhancement();
