const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const pancard = document.getElementById('pancard');
const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');

const emailError = document.querySelector('#mail + span.error');
const firstNameError = document.querySelector('#firstName + span.error');
const lastNameError = document.querySelector('#lastName + span.error');
const pancardError = document.querySelector('#pancard + span.error');
const countryError = document.querySelector('#country + span.error');
const stateError = document.querySelector('#state + span.error');
const cityError = document.querySelector('#city + span.error');

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

// PAN structure is as follows: AAAAA9999A:
// First five characters are letters, next 4 numerals, last character letter.

pancard.addEventListener('input', () => {
  let pancardRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
  let isPancardValid = pancardRegex.test(pancard.value);

  if (isPancardValid === true && pancard.validity.valid === true) {
    pancardError.innerHTML = '';
    pancardError.className = 'error';
  } else {
    showError(pancard, pancardError);
  }
});

country.addEventListener('input', () => {
  let countryRegex = /[a-zA-Z]{3,}/;
  let isCountryValid = countryRegex.test(country.value);

  if (isCountryValid === true && country.validity.valid === true) {
    countryError.innerHTML = '';
    countryError.className = 'error';
  } else {
    showError(country, countryError);
  }
});

state.addEventListener('input', () => {
  let stateRegex = /[a-zA-Z]{3,}/;
  let isstateValid = stateRegex.test(state.value);

  if (isstateValid === true && state.validity.valid === true) {
    stateError.innerHTML = '';
    stateError.className = 'error';
  } else {
    showError(state, stateError);
  }
});

city.addEventListener('input', () => {
  let cityRegex = /[a-zA-Z]{3,}/;
  let iscityValid = cityRegex.test(city.value);

  if (iscityValid === true && city.validity.valid === true) {
    cityError.innerHTML = '';
    cityError.className = 'error';
  } else {
    showError(city, cityError);
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
