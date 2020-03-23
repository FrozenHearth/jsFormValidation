const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

const emailError = document.querySelector('#mail + span.error');
const firstNameError = document.querySelector('#firstName + span.error');

const lastNameError = document.querySelector('#lastName + span.error');

email.addEventListener('input', () => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError(email, emailError);
  }
});

firstName.addEventListener('input', () => {
  let regex = /^[a-zA-Z ]{3,15}$/; // Accept alphabets, case insensitive, with minlength = 3 & maxlength = 15
  const output = regex.test(firstName.value);

  if (output === true && firstName.validity.valid === true) {
    firstNameError.innerHTML = '';
    firstNameError.className = 'error';
  } else {
    showError(firstName, firstNameError);
  }
});

lastName.addEventListener('input', () => {
  let regex = /^[a-zA-Z ]{3,15}$/; // Accept alphabets, case insensitive, with minlength = 3 & maxlength = 15
  const output = regex.test(lastName.value);

  if (output === true && lastName.validity.valid === true) {
    lastNameError.innerHTML = '';
    lastNameError.className = 'error';
  } else {
    showError(lastName, lastNameError);
  }
});

form.addEventListener('submit', event => {
  // if the email field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError(email, emailError);
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if (!firstName.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError(firstName, firstNameError);
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

const showError = (field, fieldError) => {
  if (field.validity.valueMissing) {
    // If the field is empty
    // display the following error message.

    fieldError.textContent = `You need to enter a ${field.placeholder}.`;
  } else if (field.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    fieldError.textContent = `Entered value needs to be an email address.`;
  } else if (!field.validity.valid) {
    fieldError.textContent = `Entered value needs to be a ${field.placeholder}`;
  } else if (field.validity.tooShort) {
    // If the data is too short
    // display the following error message
    fieldError.textContent = `${field.placeholder} should be at least ${field.minLength} characters; you entered ${field.value.length}.`;
  }

  // Set the styling appropriately
  fieldError.className = 'error active';
};
