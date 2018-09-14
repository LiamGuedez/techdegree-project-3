const formValidation2 = () =>
{
  //returns true if it finds any true value inside array
  const anyTrueValue = (array, attribute = null) =>
  {
    let element = '';
    let state = false;
    for (let x = 0 ; x < array.length ; x++)
    {
      attribute === null? element = array[x] : element = array[x][attribute];
      state = state || (element === true);
    }
    return state;
  }

  //if 'Credit Card is selected', cc zip cvv = required, returns true,
  //                   Otherwise, cc zip cvv = not required, returns false
  const creditCard = () =>
  {
    const setRequired = (element, value) =>
    {
      for (let x = 0; x < element.length ; x++)
        document.querySelector(element[x]).required = value;
      return value;
    }
    if (document.querySelector('#payment').selectedIndex === 1)
      return setRequired(['#cc-num', '#zip', '#cvv'], true);
    else
      return setRequired(['#cc-num', '#zip', '#cvv'], false);
  }

    document.querySelector('#register').addEventListener('click', (event) =>
    {
      const error = [
        document.querySelector('#name').validity.valueMissing,                                    //  error 0: empty name field
        document.querySelector('#mail').validity.valueMissing,                                    //  error 1: empty email field
        document.querySelector('#mail').validity.typeMismatch,                                    //  error 2: invalid email format
        !anyTrueValue(document.querySelectorAll('#activities label [type=checkbox]'), 'checked'), //  error 3: no checked checkboxes
        document.querySelector('#payment').selectedIndex === 0,                                   //  error 4: no selection in payment dropdown
        creditCard() && document.querySelector('#cc-num').validity.valueMissing,                  //  error 5: empty credit card field
        creditCard() && document.querySelector('#cc-num').validity.rangeOverflow,                 //  error 6: credit card number too big
        creditCard() && document.querySelector('#cc-num').validity.rangeUnderflow,                //  error 7: credit card number too small
        creditCard() && document.querySelector('#zip').validity.valueMissing,                     //  error 8: empty zip code field
        creditCard() && document.querySelector('#zip').validity.rangeOverflow,                    //  error 9: zip code value too big
        creditCard() && document.querySelector('#zip').validity.rangeUnderflow,                   // error 10: zip code value too small
        creditCard() && document.querySelector('#cvv').validity.valueMissing,                     // error 11: empty vin number field
        creditCard() && document.querySelector('#cvv').validity.rangeOverflow,                    // error 12: vin value too big
        creditCard() && document.querySelector('#cvv').validity.rangeUnderflow                    // error 13: vin value too small
        ];

    anyTrueValue(error) === true ? event.preventDefault() : alert('done');
    });
}
