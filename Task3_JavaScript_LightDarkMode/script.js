const switchToggle = document.querySelector("input");

switchToggle.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-theme");
});
