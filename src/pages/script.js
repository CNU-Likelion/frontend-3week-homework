const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("button-submit");
const showButton = document.getElementById("button-show");
const showUserInfo = document.querySelector(".section__userInfo");

submitButton.addEventListener("click", function () {
  const userInfo = {
    name: nameInput.value,
    age: ageInput.value,
    email: emailInput.value,
  };
});

showButton.addEventListener("click", function () {
  const userInfoName = document.getElementById("userInfo_name");
  const userInfoAge = document.getElementById("userInfo_age");
  const userInfoEmail = document.getElementById("userInfo_email");

  userInfoName.textContent = "이름: " + nameInput.value;
  userInfoAge.textContent = "나이: " + ageInput.value;
  userInfoEmail.textContent = "이메일: " + emailInput.value;

  showUserInfo.style.display = "block";
});
