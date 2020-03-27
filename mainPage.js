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
    regex: '^https?:\/\/github.com\/[^\/]*\/?$',
    required: true
  },
  facebookURL: {
    min: 22,
    max: 500,
    // prettier-ignore
    regex: '^https?:\/\/facebook.com\/[^\/]*\/?$',
    required: true
  },
  twitterURL: {
    min: 21,
    max: 500,
    // prettier-ignore
    regex: '^https?:\/\/github.com\/[^\/]*\/?$',
    required: true
  }
};

const showError = (elemId, hintMsg) => {
  document.getElementById(elemId).innerHTML = hintMsg;
};

const assignErrorClass = (...inputs) => {
  const errorClass = 'form-control has-error';
  const result = inputs.map(input => {
    input.className = errorClass;
    return input;
  });
  return result;
};

const validateInputs = (...inputs) => {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      showError(`${inputs[i].name}Err`, `Please enter your ${inputs[i].name}`);
    } else if (
      new RegExp(config[inputs[i].name].regex).test(inputs[i].value) === false
    ) {
      showError(
        `${inputs[i].name}Err`,
        `Please enter a valid ${inputs[i].name} `
      );
    } else if (
      inputs[i].value.length < config[inputs[i].name].min ||
      inputs[i].value.length > config[inputs[i].name].max
    ) {
      showError(
        `${inputs[i].name}Err`,
        `${inputs[i].name} can only be between ${
          config[inputs[i].name].min
        } and ${config[inputs[i].name].max} characters. `
      );
    } else {
      showError(`${inputs[i].name}Err`, '');
      inputs[i].name.className = 'form-control';
      if (inputs[i] === firstName) {
        firstNameError.className = 'hide';
      } else if (inputs[i] === lastName) {
        lastNameError.className = 'hide';
      } else if (inputs[i] === pancard) {
        pancardError.className = 'hide';
      } else if (inputs[i] === email) {
        emailError.className = 'hide';
      } else if (inputs[i] === country) {
        countryError.className = 'hide';
      } else if (inputs[i] === state) {
        stateError.className = 'hide';
      } else if (inputs[i] === city) {
        cityError.className = 'hide';
      } else if (inputs[i] === phoneNumber) {
        phoneNumberError.className = 'hide';
      } else if (inputs[i] === githubURL) {
        githubURLError.className = 'hide';
      } else if (inputs[i] === facebookURL) {
        facebookURLError.className = 'hide';
      } else if (inputs[i] === twitterURL) {
        twitterURLError.className = 'hide';
      }
    }
  }
};

const validate = () => {
  assignErrorClass(
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

  errorWrapper.style.display = 'block';

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
