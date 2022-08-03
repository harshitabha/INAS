const catsDrop = document.querySelector("#cats");
const dayBtns = document.querySelectorAll(".dayBtn");
const save = document.querySelector("#save");
const stTime = document.querySelector("#stTime");

catsDrop.addEventListener("change", e => console.log(catsDrop.value));

dayBtns.forEach((btn) => {
  btn.addEventListener("click", c => {
    btn.classList.toggle("is-outlined");
    btn.classList.remove("is-light");
    btn.classList.toggle("is-active");
    // console.log(btn);
  });
  btn.addEventListener("mouseover", h => {
    btn.classList.toggle("is-light");
    btn.classList.remove("is-hovered");
  });
  btn.addEventListener("mouseout", h => {
    btn.classList.remove("is-light");
  });
});

// when the save btn is clicked
save.addEventListener("click", c => {
  console.log(stTime.value);
});
