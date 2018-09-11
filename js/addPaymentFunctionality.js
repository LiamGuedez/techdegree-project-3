const addPaymentFunctionality = () =>
{
  const paymentDropdown = document.querySelector('#payment');
  const paymentMenus = [document.querySelector('#credit-card'),
                        document.querySelector('#paypal'),
                        document.querySelector('#bitcoin')];

  const hideOrShowItems = (itemSelected, value, display, firstIndex, secondIndex, thirdIndex = 0) =>
  {
    if (itemSelected === value)
    {
      paymentMenus[firstIndex].style.display = display;
      paymentMenus[secondIndex].style.display = display;
    }

    if (thirdIndex != 0)
    {
      paymentMenus[thirdIndex].style.display = display;
    }
  }

  //on page load, make the select payment option unselectable
  //and hide the paypal and bitcoin payment sections
  window.addEventListener('load', () =>
  {
    document.querySelector('#payment [value=select_method]').hidden = true;
    hideOrShowItems(null, null, 'none', 1, 2);
  });

  //on option selection, hide the appropriate values
  paymentDropdown.addEventListener('change', (event) =>
  {
    hideOrShowItems(null, null, 'block', 0, 1, 2); //unhide all 3 menus

    if(event.target.tagName === 'SELECT')
    {
      hideOrShowItems(event.target.value, 'select_method', 'none', 1, 2);
      hideOrShowItems(event.target.value, 'credit_card', 'none', 1, 2);
      hideOrShowItems(event.target.value, 'paypal', 'none', 0, 2);
      hideOrShowItems(event.target.value, 'bitcoin', 'none', 0, 1);
    }
  });
}
