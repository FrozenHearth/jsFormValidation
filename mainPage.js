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

const errorWrapper = document.getElementById('error-wrapper');

const firstNameError = document.getElementById('firstNameErr');
const lastNameError = document.getElementById('lastNameErr');
const emailError = document.getElementById('emailErr');
const pancardError = document.getElementById('pancardErr');
const countryError = document.getElementById('countryErr');
const stateError = document.getElementById('stateErr');
const cityError = document.getElementById('cityErr');
const phoneNumberError = document.getElementById('phoneNumberErr');
const githubURLError = document.getElementById('githubURLErr');
const facebookURLError = document.getElementById('facebookURLErr');
const twitterURLError = document.getElementById('twitterURLErr');

const config = {
  firstName: {
    min: 3,
    max: 15,
    regex: '^[a-zA-Z ]',
    required: true
  },
  lastName: {
    min: 3,
    max: 15,
    regex: '^[a-zA-Z ]',
    required: true
  },
  email: {
    min: 8,
    max: 30,
    // prettier-ignore
    regex:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
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

const showError = (elemId, hintMsg) => {
  document.getElementById(elemId).innerHTML = hintMsg;
};

const validate = () => {
  const errorClass = 'form-control has-error';
  firstName.className = errorClass;
  lastName.className = errorClass;
  email.className = errorClass;
  pancard.className = errorClass;
  country.className = errorClass;
  state.className = errorClass;
  city.className = errorClass;
  phoneNumber.className = errorClass;
  githubURL.className = errorClass;
  facebookURL.className = errorClass;
  twitterURL.className = errorClass;

  // Firstname validation

  errorWrapper.style.display = 'block';

  if (firstName.value === '') {
    showError('firstNameErr', 'Please enter your first name');
  } else if (
    new RegExp(config.firstName.regex).test(firstName.value) === false
  ) {
    showError('firstNameErr', 'Please enter a valid name');
  } else if (
    firstName.value.length < config.firstName.min ||
    firstName.value.length > config.firstName.max
  ) {
    showError(
      'firstNameErr',
      `First name can only be between ${config.firstName.min} and ${config.firstName.max} characters. `
    );
  } else {
    showError('firstNameErr', '');
    firstName.className = 'form-control';
    firstNameError.id = 'hide';
  }

  // Lastname validation

  if (lastName.value === '') {
    showError('lastNameErr', 'Please enter your last name');
  } else if (new RegExp(config.lastName.regex).test(lastName.value) === false) {
    showError('lastNameErr', 'Please enter a valid last name');
  } else if (
    lastName.value.length < config.lastName.min ||
    lastName.value.length > config.lastName.max
  ) {
    showError(
      'lastNameErr',
      `Last name can only be between ${config.lastName.min} and ${config.lastName.max} characters. `
    );
  } else {
    showError('lastNameErr', '');
    lastName.className = 'form-control';
    lastNameError.id = 'hide';
  }

  // Email validation

  if (email.value === '') {
    showError('emailErr', 'Please enter your email');
  } else if (new RegExp(config.email.regex).test(email.value) === false) {
    showError('emailErr', 'Please enter a valid email');
  } else if (
    email.value.length < config.email.min ||
    email.value.length > config.email.max
  ) {
    showError(
      'emailErr',
      `Email can only be between ${config.email.min} and ${config.email.max} characters. `
    );
  } else {
    showError('emailErr', '');
    email.className = 'form-control';
    emailError.id = 'hide';
  }

  // Pancard validation

  if (pancard.value === '') {
    showError('pancardErr', 'Please enter your pancard number');
  } else if (new RegExp(config.pancard.regex).test(pancard.value) === false) {
    showError('pancardErr', 'Please enter a valid pancard number');
  } else if (
    pancard.value.length < config.pancard.min ||
    pancard.value.length > config.pancard.min
    // Here min and max are the same length
  ) {
    showError(
      'pancardErr',
      `Pancard number can only be between ${config.pancard.min} and ${config.pancard.max} characters. `
    );
  } else {
    showError('pancardErr', '');
    pancard.className = 'form-control';
    pancardError.id = 'hide';
  }

  // Country validation

  if (country.value === '') {
    showError('countryErr', 'Please enter your country');
  } else if (new RegExp(config.country.regex).test(country.value) === false) {
    showError('countryErr', 'Please enter a valid country name');
  } else if (
    country.value.length < config.country.min ||
    country.value.length > config.country.max
  ) {
    showError(
      'countryErr',
      `Country name can only be between ${config.country.min} and ${config.country.max} characters. `
    );
  } else {
    showError('countryErr', '');
    country.className = 'form-control';
    countryError.id = 'hide';
  }

  // State validation

  if (state.value === '') {
    showError('stateErr', 'Please enter your state name');
  } else if (new RegExp(config.state.regex).test(state.value) === false) {
    showError('stateErr', 'Please enter a valid state name');
  } else if (
    state.value.length < config.state.min ||
    state.value.length > config.state.max
  ) {
    showError(
      'stateErr',
      `State name can only be between ${config.state.min} and ${config.state.max} characters. `
    );
  } else {
    showError('stateErr', '');
    state.className = 'form-control';
    stateError.id = 'hide';
  }

  // City validation

  if (city.value === '') {
    showError('cityErr', 'Please enter your city');
  } else if (new RegExp(config.city.regex).test(city.value) === false) {
    showError('cityErr', 'Please enter a valid city name');
  } else if (
    city.value.length < config.city.min ||
    city.value.length > config.city.max
  ) {
    showError(
      'cityErr',
      `City name can only be between ${config.city.min} and ${config.city.max} characters. `
    );
  } else {
    showError('cityErr', '');
    city.className = 'form-control';
    cityError.id = 'hide';
  }

  // Phone Number validation

  if (phoneNumber.value === '') {
    showError('phoneNumberErr', 'Please enter your phone number');
  } else if (
    new RegExp(config.phoneNumber.regex).test(phoneNumber.value) === false
  ) {
    showError('phoneNumberErr', 'Please enter a valid name');
  } else if (
    phoneNumber.value.length < config.phoneNumber.min ||
    phoneNumber.value.length > config.phoneNumber.max
  ) {
    showError(
      'phoneNumberErr',
      `Phone number can only be between ${config.phoneNumber.max} characters. `
    );
  } else {
    showError('phoneNumberErr', '');
    phoneNumber.className = 'form-control';
    phoneNumberError.id = 'hide';
  }

  // Github URL validation

  if (githubURL.value === '') {
    showError('githubURLErr', 'Please enter your github profile url');
  } else if (
    new RegExp(config.githubURL.regex).test(githubURL.value) === false
  ) {
    showError('githubURLErr', 'Please enter a valid url');
  } else if (
    githubURL.value.length < config.githubURL.min ||
    githubURL.value.length > config.githubURL.max
  ) {
    showError(
      'githubURLErr',
      `Github profile url can only be between ${config.githubURL.min} and ${config.githubURL.max} characters. `
    );
  } else {
    showError('githubURLErr', '');
    githubURL.className = 'form-control';
    githubURLError.id = 'hide';
  }

  // Facebook URL validation

  if (facebookURL.value === '') {
    showError('facebookURLErr', 'Please enter your facebook profile url');
  } else if (
    new RegExp(config.facebookURL.regex).test(facebookURL.value) === false
  ) {
    showError('facebookURLErr', 'Please enter a valid url');
  } else if (
    facebookURL.value.length < config.facebookURL.min ||
    facebookURL.value.length > config.facebookURL.max
  ) {
    showError(
      'facebookURLErr',
      `Facebook profile url can only be between ${config.facebookURL.min} and ${config.facebookURL.max} characters. `
    );
  } else {
    showError('facebookURLErr', '');
    facebookURL.className = 'form-control';
    facebookURLError.id = 'hide';
  }

  if (twitterURL.value === '') {
    showError('twitterURLErr', 'Please enter your twitter profile url');
  } else if (
    new RegExp(config.twitterURL.regex).test(twitterURL.value) === false
  ) {
    showError('twitterURLErr', 'Please enter a valid url');
  } else if (
    twitterURL.value.length < config.twitterURL.min ||
    twitterURL.value.length > config.twitterURL.max
  ) {
    showError(
      'twitterURLErr',
      `Twitter profile url can only be between ${config.twitterURL.min} and ${config.twitterURL.max} characters. `
    );
  } else {
    showError('twitterURLErr', '');
    twitterURL.className = 'form-control';
    facebookURLError.id = 'hide';
  }
};

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
    event.preventDefault();
    return false;
  }
});

// const validateInputs = (...input) => {
//   // prettier-ignore
//   let firstNameErr = lastNameErr = emailErr = pancardErr = countryErr = stateErr = cityErr = phoneNumberErr = githubURLErr = facebookURLErr = twitterURLErr = true;
//   for (let i = 0; i < input.length; i++) {
//     if (
//       input[i].value.length >= config[`${input[i].id}`].min &&
//       input[i].value.length <= config[`${input[i].id}`].max &&
//       input[i].required === true &&
//       new RegExp(config[input[i].id].regex).test(input[i].value) === true
//     ) {
//       // Submit form
//     }
//   }
// };
