// const save = document.querySelector("#save");
let events = [];

save.addEventListener("click", c => {
  // reselect the events on the schedule each time the save button is clicked
  events = document.querySelectorAll(".class, .study, .work, .meeting, .break, .other");
});

events.forEach(event => {
  event.addEventListener("mouseover", h => {
    
  });
});