//attaches the errorLabel to each element in the array
const appendErrorLabel = (array) =>
{
  for (let x = 0 ; x < array.length ; x++)
  {
    const errorLabel = document.createElement('LABEL');
    errorLabel.style.fontWeight = 'normal';
    errorLabel.style.color = 'red';
    errorLabel.style.fontSize = '15px';
    errorLabel.style.display = 'inline';
    array[x].appendChild(errorLabel);
  }
}

//checks if email is in valid email form
const validateEmail = email =>
{
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//returns true if it finds no checked boxes inside the array
const noCheckedBoxes = array =>
{
  let state = true;
  for (let x = 0 ; x < array.length ; x++)
    state = state && !(array[x].checked === true);
  return state;
}

//changes the style of the error label if an event is triggered
const addEvent = (label, value, labelText) =>
{
    value === true ? label.querySelector('label').textContent = labelText :
                    label.querySelector('label').textContent = '';
}
