const email = document.getElementById("email");
const password = document.getElementById("password");
const validations = document.querySelectorAll(
  ".password-validations .validation .checked"
);
const registerButton = document.getElementById("registerButton");
const viewIcon = document.querySelector(
  ".register-box .register-form .form-element:nth-child(2) i"
);

const lengthValidation = validations[0];
const charValidation = validations[1];

let valid = false;
let passValid = false;

email.addEventListener("input", (event) => {
  if (email.value == "") {
    valid = false;
  } else {
    if (passValid) valid = true;
  }

  registerButtonHandler();
});

password.addEventListener("input", (event) => {
  const emailCheck = checkEmail(email.value);

  // Check if the password have 6 characters
  if (password.value.length >= 6) {
    lengthValidation.innerHTML = `<i class="fa-solid fa-check"></i>`;
    lengthValidation.classList.add("correct");
    if (emailCheck) valid = true;
  } else {
    lengthValidation.innerHTML = "";
    lengthValidation.classList.remove("correct");
    valid = false;
  }

  //Check if the password has the valid characters
  const passCharCheck = checkPasswordChar(password.value);
  if (passCharCheck) {
    charValidation.innerHTML = `<i class="fa-solid fa-check"></i>`;
    charValidation.classList.add("correct");

    passValid = true;
    if (emailCheck) valid = true;
  } else {
    charValidation.innerHTML = "";
    charValidation.classList.remove("correct");

    passValid = false;
    valid = false;
  }

  registerButtonHandler();
});

viewIcon.addEventListener("click", (event) => {
  if (viewIcon.classList.contains("fa-eye")) {
    viewIcon.classList.replace("fa-eye", "fa-eye-slash");
    password.setAttribute("type", "text");
  } else {
    viewIcon.classList.replace("fa-eye-slash", "fa-eye");
    password.setAttribute("type", "password");
  }
});

registerButton.addEventListener("click", (event) => {
  alert("Register Success");
});

function checkPasswordChar(password) {
  if (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  if (email == "") {
    return false;
  } else {
    return true;
  }
}

function registerButtonHandler() {
  if (valid) {
    registerButton.classList.remove("disabled");
  } else {
    registerButton.classList.add("disabled");
  }
}
