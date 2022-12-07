const allColorEl = document.querySelectorAll("span");
const bigBoxEl = document.querySelector(".sample");

if (window.localStorage.getItem("color")) {
  bigBoxEl.style.backgroundColor = window.localStorage.getItem("color");
  allColorEl.forEach((co) => {
    co.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}
allColorEl.forEach((col) => {
  col.addEventListener("click", (e) => {
    allColorEl.forEach((co) => {
      co.classList.remove("active");
    });
    col.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    bigBoxEl.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
