const formValidation = () =>
{
  const form = document.querySelector('form');
  const nameLabel = document.querySelector('#basic [for=name]');
  const nameField = document.querySelector('#name');
  const emailLabel = document.querySelector('#basic [for=mail]');
  const emailField = document.querySelector('#mail');
  const activitiesFieldSet = document.querySelector('#activities');
  const checkboxes = document.querySelectorAll('#activities label [type=checkbox]');
  const paymentLabel = document.querySelector('[for=payment]');
  const paymentDropdown = document.querySelector('#payment');
  const cardNumLabel = document.querySelector('.col-6 [for=cc-num]');
  const cardNumField = document.querySelector('#cc-num');
  const zipLabel = document.querySelector('.col-3 [for=zip]');
  const zipField = document.querySelector('#zip');
  const cvvLabel = document.querySelector('.col-3 [for=cvv]');
  const cvvField = document.querySelector('#cvv');
  const registerButton = document.querySelector('#register');

  //returns false if there are any false values inside array
  const checkState = array =>
  {
    let state = true;
    for (let x = 0 ; x < array.length ; x++)
      state = state && (array[x] === true);
    return state;
  }

  //returns true if any of the checkboxes in array have been checked
  const anyChecked = array =>
  {
    let state = false;
    for (let x = 0 ; x < array.length ; x++)
      state = state || array[x].checked;
    return state;
  }

  //if it finds an error, it changes the color of passed elements
  const checkForUserError = (attribute, value, elementArray, attrArray) =>
  {
    const userError = (attribute === value);
    for(let x = 0; x < elementArray.length; x++)
    {
      userError ? elementArray[x]['style'][attrArray[x]] = 'red' :
                  elementArray[x]['style'][attrArray[x]] = '';
    }
    return !userError;
  }

  //checks errors before the #payment dropdown
  const checkFirstFiveErrors = (array) =>
  {
    array.push(
      checkForUserError(nameField.validity.valueMissing, true, [nameLabel, nameField], ['color','borderColor']),
      checkForUserError(emailField.validity.valueMissing, true, [emailLabel, emailField], ['color','borderColor']) &&
      checkForUserError(emailField.validity.typeMismatch, true, [emailLabel, emailField], ['color','borderColor']),
      checkForUserError(anyChecked(checkboxes), false, [activitiesFieldSet], ['color']),
      checkForUserError(paymentDropdown.selectedIndex, 0, [paymentLabel, paymentDropdown], ['color', 'color'])
    );
  }

  //checks errors after the #payment dropdown
  const checkLastSixErrors = (array) =>
  {
    array.push(
      checkForUserError(cardNumField.value, "", [cardNumLabel, cardNumField], ['color','borderColor']) &&
      checkForUserError((parseInt(cardNumField.value) <= parseInt(cardNumField.min)) || (parseInt(cardNumField.value) >= parseInt(cardNumField.max)), true, [cardNumLabel, cardNumField], ['color','borderColor']),
      checkForUserError(zipField.value, "", [zipLabel, zipField], ['color','borderColor']) &&
      checkForUserError((parseInt(zipField.value) <= parseInt(zipField.min)) || (parseInt(zipField.value) >= parseInt(zipField.max)), true, [zipLabel, zipField], ['color','borderColor']),
      checkForUserError(cvvField.value, "", [cvvLabel, cvvField], ['color','borderColor']) &&
      checkForUserError((parseInt(cvvField.value) <= parseInt(cvvField.min)) || (parseInt(cvvField.value) >= parseInt(cvvField.max)), true, [cvvLabel, cvvField], ['color','borderColor'])
    );
  }

  registerButton.addEventListener('click', (event) =>
  {
    let creditCardSelected = (paymentDropdown.selectedIndex === 1);
    let submit = []; //array to hold either true or false values

    if (creditCardSelected === true)
    {
      checkFirstFiveErrors(submit);
      checkLastSixErrors(submit);
      checkState(submit) ? form.submit() : event.preventDefault();
    }

    else
    {
      checkFirstFiveErrors(submit);
      checkState(submit) ? form.submit() : event.preventDefault();
    }
  });
}
