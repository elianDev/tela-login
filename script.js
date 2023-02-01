const hello = document.querySelector(".hello-friend");
const welcome = document.querySelector(".welcome-back");
const cover = document.querySelector(".cover");
window.onload = () => {
  hello.classList.add("active");
  welcome.classList.add("hide");
};

const btn = document.querySelectorAll(".login-btn");

const changeScreen = () => {
  hello.classList.toggle("active");
  hello.classList.toggle("hide");
  welcome.classList.toggle("active");
  welcome.classList.toggle("hide");
  cover.classList.toggle("left");
};

btn.forEach((btn) => btn.addEventListener("click", changeScreen));
