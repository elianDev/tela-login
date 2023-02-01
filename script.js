const hello = document.querySelector(".hello-friend");
const welcome = document.querySelector(".welcome-back");
const cover = document.querySelector(".cover");
window.onload = () => {
  hello.classList.add("active");
  welcome.classList.add("hide");
};

const btn = document.querySelectorAll(".login-btn");

const changeScreen = () => {
  cover.classList.toggle("left");
  hello.classList.toggle("active");
  welcome.classList.toggle("active");
};

btn.forEach((btn) => btn.addEventListener("click", changeScreen));
