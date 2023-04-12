let heading = document.querySelector("h1");
let hideButton = document.getElementById("hide-button");
let showButton = document.getElementById("show-button");

heading.textContent="Header 1"

hideButton.addEventListener("click", () => {
  heading.style.display = "none";
});

showButton.addEventListener("click", () => {
  heading.style.display = "block";
});
