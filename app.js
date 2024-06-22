const body = document.querySelector("body");
const myImg = document.querySelector("#balloon");

window.handleMyMouseMove = (event) => {
  myImg.style.top = `${event.clientY-35}px`;
  myImg.style.left = `${event.clientX-40}px`;
};