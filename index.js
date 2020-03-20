const URLParams = new URLSearchParams(window.location.search);
let userFirstName = document.getElementById('firstName');
let userLastName = document.getElementById('lastName');
let userEmail = document.getElementById('email');
let userPancard = document.getElementById('pancard');
let userCountry = document.getElementById('country');
let userState = document.getElementById('state');
let userCity = document.getElementById('city');
let userPhoneNumber = document.getElementById('phoneNumber');
let userGithubURL = document.getElementById('githubURL');
let userFacebookURL = document.getElementById('facebookURL');
let userTwitterURL = document.getElementById('twitterURL');

let arr = [];

const entries = URLParams.entries();

for (pair of entries) {
  arr.push(pair);
}

let personDetails = arr.reduce((o, [k, v]) => ((o[k] = v), o), {});

const {
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
} = personDetails;

userFirstName.innerHTML += firstName;
userLastName.innerHTML += lastName;
userEmail.innerHTML += email;
userPancard.innerHTML += pancard;
userCountry.innerHTML += country;
userState.innerHTML += state;
userCity.innerHTML += city;
userPhoneNumber.innerHTML += phoneNumber;
userGithubURL.innerHTML += githubURL;
userFacebookURL.innerHTML += facebookURL;
userTwitterURL.innerHTML += twitterURL;
