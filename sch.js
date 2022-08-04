const catsDrop = document.querySelector("#cats");
const dayBtns = document.querySelectorAll(".dayBtn");
const save = document.querySelector("#save");

const endTime = document.querySelector("#edTime");
const stTime = document.querySelector("#stTime");
const eventName = document.querySelector("#eName");
const eventDescription = document.querySelector("#eDesc");
const eCat = document.querySelector("#cats")
const days = document.querySelector("#dayBtn");
let daysObj = {
  sunday: false,
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
};

catsDrop.addEventListener("change", e => console.log(catsDrop.value));

// changing the day button look on click
dayBtns.forEach((btn) => {
  btn.addEventListener("click", c => {
    btn.classList.toggle("is-outlined");
    btn.classList.remove("is-light");
    btn.classList.toggle("is-active");
    daysObj[btn.id] = !daysObj[btn.id];
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



save.addEventListener("click", c => {
  // if any of the days have been selected for the event
  Object.keys(daysObj).forEach(day => {
    if (daysObj[day] == true) {
      console.log("in")
      let start = stTime.value.split(":") // hr of st time
      if(start[0][0] == 0) start[0] = start[0].slice(1); // removing the extra 0 b4 the hr
      let end = endTime.value.split(":") // hr of end time
      if(end[0][0] == 0) end[0] = end[0].slice(1); // removing the extra 0 b4 the hr
      for (var t = start[0]; t <= end[0]; t++) {
        // console.log(`${t}`);
        // console.log(`#${day}-${t}`);
        document.querySelector(`#${day}-${t}`).classList.add(eCat.value); // changing the color on the schedule to rep the event
        
      }
    }
  });
});