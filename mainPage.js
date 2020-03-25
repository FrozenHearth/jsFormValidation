const form = document.getElementsByTagName('form')[0];
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const pancard = document.getElementById('pancard');
const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');
const phoneNumber = document.getElementById('phoneNumber');
const githubURL = document.getElementById('githubURL');
const facebookURL = document.getElementById('facebookURL');
const twitterURL = document.getElementById('twitterURL');

const emailError = document.querySelector('#email + span.error');
const firstNameError = document.querySelector('#firstName + span.error');
const lastNameError = document.querySelector('#lastName + span.error');
const pancardError = document.querySelector('#pancard + span.error');
const countryError = document.querySelector('#country + span.error');
const stateError = document.querySelector('#state + span.error');
const cityError = document.querySelector('#city + span.error');
const phoneNumberError = document.querySelector('#phoneNumber + span.error');
const githubURLError = document.querySelector('#githubURL + span.error');
const facebookURLError = document.querySelector('#facebookURL + span.error');
const twitterURLError = document.querySelector('#twitterURL + span.error');

email.addEventListener('input', () => {
  // Each time the user types something, we check if the
  // form fields are valid.

  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const isValidEmail = emailRegex.test(email.value);

  if (isValidEmail === true && email.validity.valid === true) {
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

phoneNumber.addEventListener('input', () => {
  let phoneNumberRegex = /(7|8|9)\d{9}/;
  let isPhoneNumberValid = phoneNumberRegex.test(phoneNumber.value);

  if (isPhoneNumberValid === true && phoneNumber.validity.valid === true) {
    phoneNumberError.innerHTML = '';
    phoneNumberError.className = 'error';
  } else {
    showError(phoneNumber, phoneNumberError);
  }
});

githubURL.addEventListener('input', () => {
  let githubURLRegex = /^https?:\/\/github.com\/[^\/]*\/?$/;
  let isGithubURLValid = githubURLRegex.test(githubURL.value);

  if (isGithubURLValid === true && githubURL.validity.valid === true) {
    githubURLError.innerHTML = '';
    githubURLError.className = 'error';
  } else {
    showError(githubURL, githubURLError);
  }
});

facebookURL.addEventListener('input', () => {
  let facebookURLRegex = /^https?:\/\/facebook.com\/[^\/]*\/?$/;
  let isfacebookURLValid = facebookURLRegex.test(facebookURL.value);

  if (isfacebookURLValid === true && facebookURL.validity.valid === true) {
    facebookURLError.innerHTML = '';
    facebookURLError.className = 'error';
  } else {
    showError(facebookURL, facebookURLError);
  }
});

twitterURL.addEventListener('input', () => {
  let twitterURLRegex = /^https?:\/\/twitter.com\/[^\/]*\/?$/;
  let isTwitterURLValid = twitterURLRegex.test(twitterURL.value);

  if (isTwitterURLValid === true && twitterURL.validity.valid === true) {
    twitterURLError.innerHTML = '';
    twitterURLError.className = 'error';
  } else {
    showError(twitterURL, twitterURLError);
  }
});

form.addEventListener('submit', event => {
  if (
    email.value === '' ||
    firstName.value === '' ||
    lastName.value === '' ||
    country.value === '' ||
    pancard.value === '' ||
    phoneNumber.value === '' ||
    state.value === '' ||
    city.value === '' ||
    githubURL.value === '' ||
    facebookURL.value === '' ||
    twitterURL.value === ''
  ) {
    // alert('Please Fill All Required Fields');
    event.preventDefault();
    return false;
  }
});

const showError = (field, fieldError) => {
  if (field.validity.valueMissing) {
    // If the field is empty
    // display the following error message.

    fieldError.textContent = `You need to enter a ${field.placeholder}.`;
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

const config = {
  firstName: {
    min: 3,
    max: 15,
    regex: '^[a-zA-Z ]{3,15}$',
    required: true
  },
  lastName: {
    min: 3,
    max: 15,
    regex: '^[a-zA-Z ]{3,15}$',
    required: true
  },
  email: {
    min: 8,
    max: 30,
    regex:
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    required: true
  },
  pancard: {
    min: 10,
    max: 10,
    regex: '[A-Z]{5}[0-9]{4}[A-Z]{1}',
    required: true
  },
  country: {
    min: 3,
    max: 50,
    regex: '[a-zA-Z]{3,50}',
    required: true
  },
  state: {
    min: 3,
    max: 50,
    regex: '[a-zA-Z]{3,50}',
    required: true
  },
  city: {
    min: 3,
    max: 50,
    regex: '[a-zA-Z]{3,50}',
    required: true
  },
  phoneNumber: {
    min: 10,
    max: 10,
    // prettier-ignore
    regex: '(7|8|9)\d{9}',
    required: true
  },
  githubURL: {
    min: 20,
    max: 500,
    // prettier-ignore
    regex: '/^https?:\/\/github.com\/[^\/]*\/?$/',
    required: true
  },
  facebookURL: {
    min: 22,
    max: 500,
    // prettier-ignore
    regex: '/^https?:\/\/facebook.com\/[^\/]*\/?$/',
    required: true
  },
  twitterURL: {
    min: 21,
    max: 500,
    // prettier-ignore
    regex: '/^https?:\/\/github.com\/[^\/]*\/?$/',
    required: true
  }
};

const validateInputs = (...x) => {
  for (let i = 0; i < x.length; i++) {
    if (
      x[i].value.length >= config[`${x[i].id}`].min &&
      x[i].value.length <= config[`${x[i].id}`].max &&
      x[i].required === true &&
      new RegExp(config[x[i].id].regex).test(x[i].value) === true
      // Convert string to RegExp
    ) {
      // If all the above conditions pass
    } else {
      // Display error message depending on which input is wrong
      if (x[i] === firstName) {
        console.log('wrong firstname');
      } else if (x[i] === lastName) {
        console.log('wrong lastname bsdk');
      } else if (x[i] === email) {
        console.log('wrong email');
      } else if (x[i] === pancard) {
        console.log('wrong pancard');
      }
    }
  }
};

const validate = () => {
  validateInputs(
    firstName,
    lastName,
    email,
    pancard,
    country,
    state,
    city,
    phoneNumber,
    githubURL,
    facebookURL,
    twitterURL
  );
};
