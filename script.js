const button = document.getElementsByTagName("button")[0];
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorBox = document.querySelector(".errorBox");
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_ALPHABETS = ALPHABETS.toUpperCase();

button.onclick = function () {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  // validation

  if (usernameValue == "" && emailValue == "" && passwordValue == "") {
    errorBox.innerText = "please make sure to input all the fields";
    errorBox.classList.add("active");
    return;
  }

  if (passwordValue.length <= 10) {
    errorBox.innerText = "Password must be more than 10 characters long..";
    errorBox.classList.add("active");
    return;
  }

  if (!containsUppercase(passwordValue)) {
    errorBox.innerText = "Please enter at least one uppercase character";
    errorBox.classList.add("active");

    return;
  }

  // consoling the values to the console

  // resetting input fields after submit
  username.value = "";
  email.value = "";
  password.value = "";
  errorBox.innerText = "";
  errorBox.classList.remove("active");

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
