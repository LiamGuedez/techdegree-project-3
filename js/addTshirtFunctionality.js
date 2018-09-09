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
