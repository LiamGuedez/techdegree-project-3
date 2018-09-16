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
  nameField.addEventListener('input', () => {addEvent(nameLabel, (nameField.value === ''), '            [Please fill out this field]');});
  nameField.addEventListener('focus', () => {addEvent(nameLabel, (nameField.value === ''), '            [Please fill out this field]');});
  nameField.addEventListener('focusout', () => {addEvent(nameLabel, (nameField.value === ''), '',);});
  registerButton.addEventListener('click', () => {addEvent(nameLabel, (nameField.value === ''), '            [Please fill out this field]');});

   /*******************          EMAIL FIELD IS EMPTY AND INVALID EMAIL FORMAT          *******************/
  emailField.addEventListener('input', () =>
  {
    emailField.value === ''?
      addEvent(emailLabel, true, '            [Please fill out this field]')  :
      addEvent(emailLabel, !validateEmail(emailField.value), '            [Please provide a vaild email]');
  });

  emailField.addEventListener('focus', () =>
  {
    emailField.value === ''?
      addEvent(emailLabel, true, '            [Please fill out this field]')  :
      addEvent(emailLabel, !validateEmail(emailField.value), '            [Please provide a vaild email]');
  });

  emailField.addEventListener('focusout', () =>
  {
    emailField.value === ''?
      addEvent(emailLabel, true, '            [Please fill out this field]')  :
      addEvent(emailLabel, !validateEmail(emailField.value), '            [Please provide a vaild email]');
  });

  registerButton.addEventListener('click', () =>
  {
    emailField.value === ''?
      addEvent(emailLabel, true, '            [Please fill out this field]')  :
      addEvent(emailLabel, !validateEmail(emailField.value), '            [Please provide a vaild email]');
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
  creditCardField.addEventListener('focus', () => {addEvent(creditCardLabel, (creditCardField.value === ''), '            [Please fill out this field]');});
  creditCardField.addEventListener('focusout', () => {addEvent(creditCardLabel, (creditCardField.value === ''), '');});
  creditCardField.addEventListener('click', () => {addEvent(creditCardLabel, (creditCardField.value === ''), '            [Please fill out this field]');});
  registerButton.addEventListener('click', () => {addEvent(creditCardLabel, (creditCardField.value === ''), '            [Please fill out this field]');});

        /*******************          CREDIT CARD NUMBER IS TOO SMALL OR TOO BIG        *******************/
creditCardField.addEventListener('input', () =>
{
  ((creditCardField.value.length < 13) || (creditCardField.value.length > 16)) ?
    addEvent(creditCardLabel, true, '            [13 to 16 digits]')           :
    addEvent(creditCardLabel, true, '')                                        ;
});

                  /*******************          ZIP CODE FIELD IS EMPTY          *******************/
zipField.addEventListener('focus', () => {addEvent(zipLabel, (zipField.value === ''), '            Please fill');});
zipField.addEventListener('focusout', () => {addEvent(zipLabel, (zipField.value === ''), '');});
zipField.addEventListener('click', () => {addEvent(zipLabel, (zipField.value === ''), '            Please fill');});
registerButton.addEventListener('click', () => {addEvent(zipLabel, (zipField.value === ''), '            Please fill');});


        /*******************          ZIP CODE ENTRY IS TOO SMALL OR TOO BIG        *******************/
zipField.addEventListener('input', () =>
{
  zipField.value.length != 5 ?
    addEvent(zipLabel, true, '            [5 digits]') :
    addEvent(zipLabel, true, '') ;
});

                  /*******************          CVV CARD FIELD IS EMPTY          *******************/
cvvField.addEventListener('focus', () => {addEvent(cvvLabel, (cvvField.value === ''), '            Please fill');});
cvvField.addEventListener('focusout', () => {addEvent(cvvLabel, (cvvField.value === ''), '');});
cvvField.addEventListener('click', () => {addEvent(cvvLabel, (cvvField.value === ''), '            Please fill');});
registerButton.addEventListener('click', () => {addEvent(cvvLabel, (cvvField.value === ''), '            Please fill');});

             /*******************          CVV ENTRY IS TOO SMALL OR TOO BIG        *******************/
cvvField.addEventListener('input', () =>
{
cvvField.value.length != 3 ?
addEvent(cvvLabel, true, '            [3 digits]') :
addEvent(cvvLabel, true, '') ;
});

}
