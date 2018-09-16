//adds text field for last option inside the first dropdown menu
const toggleOtherFieldDisplay = () =>
{
  const basicFieldSet = document.querySelector('#basic');
  const otherTextField = document.querySelector('#other-title');
  otherTextField.style.display = 'none';

  basicFieldSet.addEventListener('change', (event) =>
  {
    if(event.target.tagName === 'SELECT')
    {
      event.target.value === 'other'?
        otherTextField.style.display = 'block' :
        otherTextField.style.display = 'none'  ;
    }
  });
}
