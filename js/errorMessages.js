const errorMessages = ()  =>
{
  const nameLabel = document.querySelector('#basic [for=name]');
  const nameField = document.querySelector('#name');
  const emailLabel = document.querySelector('#basic [for=mail]');
  const emailField = document.querySelector('#mail');
  const activitiesLegend = document.querySelector('#activities legend');
  const activitiesFieldSet = document.querySelector('#activities');
  const checkboxes = document.querySelectorAll('#activities label [type=checkbox]');
  const paymentLabel = document.querySelector('[for=payment]');
  const paymentDropdown = document.querySelector('#payment');
  const creditCardLabel = document.querySelector('.col-6 [for=cc-num]');
  const creditCardField = document.querySelector('#cc-num');
  const zipLabel = document.querySelector('.col-3 [for=zip]');
  const zipField = document.querySelector('#zip');
  const cvvLabel = document.querySelector('.col-3 [for=cvv]');
  const cvvField = document.querySelector('#cvv');
  const registerButton = document.querySelector('#register');

  appendErrorLabel([nameLabel, emailLabel, activitiesLegend, paymentLabel, creditCardLabel, zipLabel, cvvLabel]);

                  /*******************          NAME FIELD IS EMPTY          *******************/
  nameField.addEventListener('keypress', () => {addEvent(nameLabel, nameField, '            [Please fill out this field]', 'validity', 'valueMissing');});
  nameField.addEventListener('focus', () => {addEvent(nameLabel, nameField, '            [Please fill out this field]', 'validity', 'valueMissing');});
  nameField.addEventListener('focusout', () => {addEvent(nameLabel, nameField, '', 'validity', 'valueMissing');});
  registerButton.addEventListener('click', () => {addEvent(nameLabel, nameField, '            [Please fill out this field]', 'validity', 'valueMissing');});

   /*******************          EMAIL FIELD IS EMPTY AND INVALID EMAIL FORMAT          *******************/
  emailField.addEventListener('keypress', () =>
  {
    emailField.validity.valueMissing?
      addEvent(emailLabel, emailField, '            [Please fill out this field]', 'validity', 'valueMissing')  :
      addEvent(emailLabel, emailField, '            [Please provide a vaild email]', 'validity', 'typeMismatch');
  });

  emailField.addEventListener('focus', () =>
  {
    emailField.validity.valueMissing?
      addEvent(emailLabel, emailField, '            [Please fill out this field]', 'validity', 'valueMissing')  :
      addEvent(emailLabel, emailField, '            [Please provide a vaild email]', 'validity', 'typeMismatch');
  });

  emailField.addEventListener('focusout', () =>
  {
    emailField.validity.valueMissing?
      addEvent(emailLabel, emailField, '', 'validity', 'valueMissing')  :
      addEvent(emailLabel, emailField, '', 'validity', 'typeMismatch');
  });

  registerButton.addEventListener('click', () =>
  {
    emailField.validity.valueMissing?
      addEvent(emailLabel, emailField, '            [Please fill out this field]', 'validity', 'valueMissing')  :
      addEvent(emailLabel, emailField, '            [Please provide a vaild email]', 'validity', 'typeMismatch');
  });

                  /*******************          NO ACTIVITY BOX CHECKED          *******************/
  activitiesFieldSet.addEventListener('mouseover', () =>{addEvent(activitiesLegend, noCheckedBoxes(checkboxes), '            [Please select at least one event]');});
  activitiesFieldSet.addEventListener('mouseout', () =>{addEvent(activitiesLegend, noCheckedBoxes(checkboxes), '');});
  registerButton.addEventListener('click', () =>{addEvent(activitiesLegend, noCheckedBoxes(checkboxes), '            [Please select at least one event]');});
  activitiesFieldSet.addEventListener('change', () =>
  {
    noCheckedBoxes(checkboxes) === true?
      addEvent(activitiesLegend, noCheckedBoxes(checkboxes), '            [Please select at least one event]')  :
      addEvent(activitiesLegend, noCheckedBoxes(checkboxes), '');
  });

                /*******************          NO PAYMENT METHOD SELECTED          *******************/
  paymentDropdown.addEventListener('click', () =>{addEvent(paymentLabel, (paymentDropdown.selectedIndex === 0), '            [Please select a method of payment]');});
  paymentDropdown.addEventListener('focusout', () =>{addEvent(paymentLabel, (paymentDropdown.selectedIndex === 0), '');});
  registerButton.addEventListener('click', () =>{addEvent(paymentLabel, (paymentDropdown.selectedIndex === 0), '            [Please select a method of payment]');});

                /*******************          CREDIT CARD FIELD IS EMPTY          *******************/
  creditCardField.addEventListener('focus', () => {addEvent(creditCardLabel, creditCardField, '            [Please fill out this field]', 'validity', 'valueMissing');});
  creditCardField.addEventListener('focusout', () => {addEvent(creditCardLabel, creditCardField, '', 'validity', 'valueMissing');});
  creditCardField.addEventListener('click', () => {addEvent(creditCardLabel, creditCardField, '            [Please fill out this field]', 'validity', 'valueMissing');});
  registerButton.addEventListener('click', () => {addEvent(creditCardLabel, creditCardField, '            [Please fill out this field]', 'validity', 'valueMissing');});

        /*******************          CREDIT CARD NUMBER IS TOO SMALL OR TOO BIG        *******************/
creditCardField.addEventListener('keypress', () =>
{
  if (creditCardField.validity.rangeUnderflow) addEvent(creditCardLabel, creditCardField, '            [13 to 16 digits]', 'validity', 'rangeUnderflow');
  else if (creditCardField.validity.rangeOverflow) addEvent(creditCardLabel, creditCardField, '            [13 to 16 digits]', 'validity', 'rangeOverflow');
  else addEvent(creditCardLabel, creditCardField, '', 'validity', 'rangeUnderflow') ;
});

                  /*******************          ZIP CODE FIELD IS EMPTY          *******************/
zipField.addEventListener('focus', () => {addEvent(zipLabel, zipField, '            [Please fill out this field]', 'validity', 'valueMissing');});
zipField.addEventListener('focusout', () => {addEvent(zipLabel, zipField, '', 'validity', 'valueMissing');});
zipField.addEventListener('click', () => {addEvent(zipLabel, zipField, '            [Please fill out this field]', 'validity', 'valueMissing');});
registerButton.addEventListener('click', () => {addEvent(zipLabel, zipField, '            [Please fill out this field]', 'validity', 'valueMissing');});


        /*******************          ZIP CODE ENTRY IS TOO SMALL OR TOO BIG        *******************/
zipField.addEventListener('keypress', () =>
{
  zipField.value.length != 4 ?
    addEvent(zipLabel, zipField, '            [5 digits]', 'validity', 'rangeUnderflow') :
    addEvent(zipLabel, zipField, '', 'validity', 'rangeOverflow') ;
});

                  /*******************          CVV CARD FIELD IS EMPTY          *******************/
cvvField.addEventListener('keypress', () => {addEvent(cvvLabel, cvvField, '            [Please fill out this field]', 'validity', 'valueMissing');});
cvvField.addEventListener('focus', () => {addEvent(cvvLabel, cvvField, '            [Please fill out this field]', 'validity', 'valueMissing');});
cvvField.addEventListener('focusout', () => {addEvent(cvvLabel, cvvField, '', 'validity', 'valueMissing');});
cvvField.addEventListener('click', () => {addEvent(cvvLabel, cvvField, '            [Please fill out this field]', 'validity', 'valueMissing');});
registerButton.addEventListener('click', () => {addEvent(cvvLabel, cvvField, '            [Please fill out this field]', 'validity', 'valueMissing');});

             /*******************          CVV ENTRY IS TOO SMALL OR TOO BIG        *******************/
cvvField.addEventListener('keypress', () =>
{
cvvField.value.length != 2 ?
addEvent(cvvLabel, cvvField, '            [3 digits]', 'validity', 'rangeUnderflow') :
addEvent(cvvLabel, cvvField, '', 'validity', 'rangeOverflow') ;
});

}
