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
