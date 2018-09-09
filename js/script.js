//adds text field for last option inside the first dropdown menu
const addJobTextField = () =>
{
  const basicFieldSet = document.querySelector('.basic');
  const otherTextField = document.createElement('input');
  otherTextField.type = 'text';
  otherTextField.id = 'other-title';
  otherTextField.placeholder = "Your Job Role";
  otherTextField.style.display = 'none';

  basicFieldSet.appendChild(otherTextField);

  basicFieldSet.addEventListener('change', (event) => {
    if(event.target.tagName === 'SELECT')
    {
      otherTextField.style.display = 'none';
      if (event.target.value === 'other')
      {
          otherTextField.style.display = 'block';
      }
    }
  });
}

//for the t-shirt "color" menu, only displays the color options
//that match the design selected in the "design" menu
const addTshirtFunctionality = () =>
{
  const shirtFieldSet = document.querySelector('.shirt');
  const colorDropdown = document.querySelector('#color');

  //helper function
  displayIndeces = (array, start, end, value) =>
  {
    for (let x = start ; x <= end ; x++ )
    {
      array[x].style.display = value;
    }
  }

  //helper function
  const adjustSelectMenu = (start, end) =>
  {
    colorDropdown.style.display = 'block';
    displayIndeces(colorDropdown, 0, 6, 'none');
    displayIndeces(colorDropdown, start, end, 'block');
    colorDropdown.selectedIndex = start;
  }

  //on page load, hide the color dropdown
  window.addEventListener('load', () =>
  {
    colorDropdown.style.display = 'none';
  });

  shirtFieldSet.addEventListener('change', (event) =>
  {
    if(event.target.tagName === 'SELECT')
    {
      if (event.target.value === 'js puns')
      {
        adjustSelectMenu(1,3);
      }
      else if (event.target.value === 'heart js')
      {
        adjustSelectMenu(4,6);
      }
      else
      {
        colorDropdown.style.display = 'none';
      }
    }
  });
}

//does not allow the user to select
//multiple activities at the same day and time.
//also, displays activities total price.
const addActivitiesFunctionality = () =>
{
  const updateCheckboxClasses = checkboxes_ =>
  {
    checkboxes_[1].className = 'one';
    checkboxes_[2].className = 'two';
    checkboxes_[3].className = 'three';
    checkboxes_[4].className = 'four';
  }

  const appendTotalLabel = fieldSet =>
  {
    const createLabel = (name, text, attr, value) =>
    {
      const label = document.createElement('label');
      label.className = name;
      label.textContent = text ;
      label.style[attr] = value;
      return label;
    }

    const totalLabel = createLabel('totallabel', 'Total:  $', 'opacity', 0);
    const inner$Label = createLabel('dollarlabel', '0.00', 'display', 'inline-block');
    totalLabel.appendChild(inner$Label);
    fieldSet.appendChild(totalLabel);
  }

  const updateTotal = () =>
  {
    let sum = 0;
    let totalLabel = document.querySelector('.totallabel');
    const dollarLabel = document.querySelector('.dollarlabel');

    for (let x = 0; x < checkboxes.length; x++)
    {
      if (checkboxes[x].checked === true)
      {
        x === 0 ? sum += 200 : sum += 100;
      }
    }

    dollarLabel.textContent = sum.toString();
    sum === 0 ? totalLabel.style.opacity = 0
              : totalLabel.style.opacity = 1;
  }

  const checkForConflicts = () =>
  {
    const greyOutLabel = (checkboxA, checkboxB, label, color, index, opnlIndex ='') =>
    {
      if ( (checkboxA.checked) && (!checkboxB.checked) )
      {
        checkboxB.disabled = true;
        label[index].style.color = color;
      }
      else if(opnlIndex != '')
      {
        checkboxA.disabled = false;
        checkboxB.disabled = false;
        label[index].style.color = color;
        label[opnlIndex].style.color = color;
      }
    }

    const labels = document.querySelectorAll('.activities label');
    const checkbox1 = document.querySelector('.one');
    const checkbox2 = document.querySelector('.two');
    const checkbox3 = document.querySelector('.three');
    const checkbox4 = document.querySelector('.four');

    greyOutLabel(checkbox1, checkbox3, labels, 'black', 1, 3 ); //if both 1 and 3 are unchecked
    greyOutLabel(checkbox1, checkbox3, labels, 'DimGrey', 3);       //if 1 is checked and 3 is unchecked
    greyOutLabel(checkbox3, checkbox1, labels, 'DimGrey', 1);       //if 3 is checked and 1 becomes checked
    greyOutLabel(checkbox2, checkbox4, labels, 'black', 2, 4 ); //if both 2 and 4 are unchecked
    greyOutLabel(checkbox2, checkbox4, labels, 'DimGrey', 4);       //if 2 is checked and 4 is unchecked
    greyOutLabel(checkbox4, checkbox2, labels, 'DimGrey', 2);       //if 4 is checked and 2 becomes checked
  }

  const addEvent = (checkBoxes, fieldSet) =>
  {
    fieldSet.addEventListener('change', (event) =>
    {
      updateTotal();
      checkForConflicts(checkBoxes);
    });
  }

  const checkboxes = document.querySelectorAll('.activities label [type=checkbox]');
  const activitiesFieldSet = document.querySelector('.activities');
  updateCheckboxClasses(checkboxes);
  appendTotalLabel(activitiesFieldSet);
  addEvent(checkboxes, activitiesFieldSet);
}

//on page load, start with the first field selected
window.onload = () =>
{
  const nameField = document.querySelector('#name');
  nameField.focus();
}

addJobTextField();
addTshirtFunctionality();
addActivitiesFunctionality();
