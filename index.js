const allColorEl = document.querySelectorAll("span");
const bigBoxEl = document.querySelector(".sample");
// console.log(bigBoxEl);

if (window.localStorage.getItem("color")) {
  bigBoxEl.style.backgroundColor = window.localStorage.getItem("color");
} else {
  console.log(`no`);
}
allColorEl.forEach((col) => {
  //   col.classList.remove("active");
  col.addEventListener("click", (e) => {
    allColorEl.forEach((co) => {
      co.classList.remove("active");
    });
    col.classList.add("active");
    console.log(e.currentTarget.dataset.color);
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    bigBoxEl.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
