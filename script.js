const button = document.getElementsByTagName("button")[0];
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_ALPHABETS = ALPHABETS.toUpperCase();

button.onclick = function () {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  // validation

  if (usernameValue == "" && emailValue == "" && passwordValue == "") {
    console.log("please make sure to input all the fields");
    return;
  }

  if (passwordValue.length <= 10) {
    console.log("Password must be more than 10 characters long..");
    return;
  }

  if (!containsUppercase(passwordValue)) {
    console.log("Please enter at least one uppercase character");
    return;
  }

  // consoling the values to the console
  console.log({ usernameValue, emailValue, passwordValue });

  // resetting input fields after submit
  username.value = "";
  email.value = "";
  password.value = "";

  // on successful validation
  window.location = "https://www.google.com";
};

function containsUppercase(input) {
  for (let x of UPPERCASE_ALPHABETS) {
    if (input.includes(x)) {
      return true;
    }
  }

  return false;
}

button.addEventListener("click", function () {});
