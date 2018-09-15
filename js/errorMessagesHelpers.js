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

//returns true if it finds no checked boxes inside the array
const noCheckedBoxes = array =>
{
  let state = true;
  for (let x = 0 ; x < array.length ; x++)
    state = state && !(array[x].checked === true);
  return state;
}

//returns either an attribute or a value
//depending on the null value of attr1 and attr2
const attributeOrValue = (passedItem, attr1, attr2) =>
{
  let variable;
  (attr1 !== null) && (attr2 !== null) ?
    variable = passedItem[attr1][attr2] :
    variable = passedItem;
  return variable;
}

//changes the style of the error label if an event is triggered
const addEvent = (label, attOrVal, labelText, attr1 = null, attr2 = null) =>
{
    let item = attributeOrValue(attOrVal, attr1, attr2);
    item === true ? label.querySelector('label').textContent = labelText :
                    label.querySelector('label').textContent = '';
}
