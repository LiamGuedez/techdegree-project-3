//on page load, start with the first field selected
window.onload = () =>
{
  const nameField = document.querySelector('#name');
  nameField.focus();
}

toggleOtherFieldDisplay();
addTshirtFunctionality();
addActivitiesFunctionality();
addPaymentFunctionality();
formValidation();
errorMessages();
