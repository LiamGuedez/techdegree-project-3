const formValidation = () =>
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
        (document.querySelector('#name').value === ''),                                           //  error 0: empty name field
        (document.querySelector('#mail').value === ''),                                           //  error 1: empty email field
        !validateEmail(document.querySelector('#mail').value),                                    //  error 2: invalid email format
        !anyTrueValue(document.querySelectorAll('#activities label [type=checkbox]'), 'checked'), //  error 3: no checked checkboxes
        (document.querySelector('#payment').selectedIndex === 0),                                 //  error 4: no selection in payment dropdown
        creditCard() && (document.querySelector('#cc-num').value === ''),                         //  error 5: empty credit card field
        creditCard() && ( (document.querySelector('#cc-num').value.length < 13) ||                //  error 6: too many/too few cc digits
                          (document.querySelector('#cc-num').value.length > 16)  ),
        creditCard() && !(Number.isInteger(Number(document.querySelector('#cc-num').value))),     //  error 7: cc entry is not a number
        creditCard() && (document.querySelector('#zip').value === ''),                            //  error 8: empty zip code field
        creditCard() && (document.querySelector('#zip').value.length !== 5),                      //  error 9: too many/too few zip digits
        creditCard() && !(Number.isInteger(Number(document.querySelector('#zip').value))),        // error 10: zip entry is not a number
        creditCard() && (document.querySelector('#cvv').value === ''),                            // error 11: empty cvv number field
        creditCard() && (document.querySelector('#cvv').value.length !== 3),                      // error 12: too many/too few cvv digits
        creditCard() && !(Number.isInteger(Number(document.querySelector('#cvv').value))),        // error 13: cvv entry is not a number
        ];

      anyTrueValue(error) === true ? event.preventDefault() : document.querySelector('form').submit();
    });
}
