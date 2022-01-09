const instarSevice = document.querySelector("#instarSevice img");
const instarSeviceDescription = document.querySelector(
  ".instarSeviceDescription"
);

instarSevice.addEventListener("click", function () {
  if ((instarSeviceDescription.classList = "hidden")) {
    instarSeviceDescription.classList.toggle("hidden");
  } else {
    instarSeviceDescription.classList.toggle("hidden");
  }
});
