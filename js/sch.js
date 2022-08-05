const dayBtns = document.querySelectorAll(".dayBtn");
const save = document.querySelector("#save");

const endTime = document.querySelector("#edTime");
const stTime = document.querySelector("#stTime");
const eventName = document.querySelector("#eName");
const eventDescription = document.querySelector("#eDesc");
const eCat = document.querySelector("#cats")

let events = [];

let daysObj = {
  sunday: false,
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
};

eCat.addEventListener("change", e => console.log(eCat.value));

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

// adding an event to the schedule
save.addEventListener("click", c => {
  // if any of the days have been selected for the event
  Object.keys(daysObj).forEach(day => {
    if (daysObj[day] == true) {
      let start = stTime.value.split(":") // hr of st time
      if (start[0][0] == 0) start[0] = start[0].slice(1); // removing the extra 0 b4 the hr
      let end = endTime.value.split(":") // hr of end time
      if (end[0][0] == 0) end[0] = end[0].slice(1); // removing the extra 0 b4 the hr
      
      for (var t = start[0]; t <= end[0]; t++) {
        document.querySelector(`#${day}-${t}`).classList.add(eCat.value); // changing the color on the schedule to rep the event
      }

      // the staring div of the event
      let topDiv = document.querySelector(`#${day}-${start[0]}`);
      //round the corners of the start and end box
      topDiv.classList.add("stBox");
      document.querySelector(`#${day}-${end[0]}`).classList.add("edBox"); 

      // add the event name to the box
      // for this line need to figure out how to convert from 24 hr time to 12 hr time
      // if after 1 pm
      if (parseInt(start[0]) > 12) {
        start[0] = (parseInt(start[0]) - 12).toString(); // changing to 12 hr time
        start[1] += " p.m.";
      }
      else start[1] += " a.m.";
      if (parseInt(end[0]) > 12) {
        end[0] = (parseInt(end[0]) - 12).toString(); // changing to 12 hr time
        end[1] += " p.m.";
      }
      else end[1] += " a.m.";


      topDiv.innerHTML = `${eventName.value}<br>${start.join(":")} - ${end.join(":")}`;

      // adding a popup for the event that can been seen when hovered over
      if(eventDescription.value != "") topDiv.innerHTML += `<div id="${day[0]}_${eventName.value.split(" ").join("-")}" class="popuptext"> Event description: ${eventDescription.value}</div>`;
    }

  });

  //clear out the schedule builder
  eCat.value = "default";
  eventName.value = "";
  eventDescription.value = "";
  stTime.value = "";
  endTime.value = "";
  daysObj = {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  };
  dayBtns.forEach((btn) => {
    btn.classList.add("is-outlined");
    btn.classList.remove("is-active");
    // console.log(btn);
  });
  
  // reselect the events on the schedule each time the save button is clicked
  events = document.querySelectorAll(".myBox.class, .myBox.study, .myBox.work, .myBox.meeting, .myBox.break, .myBox.other");
  console.log(events);
  let popupID;
  // having the description pop up
  events.forEach(e => {
    e.addEventListener("mouseover", h => {
      let day = e.id.split("-")[0];
      let id = e.id.split("-")[1]; // get the number part of the id
      // go to the starting div of the event (where the div isn't empty)
      while(document.querySelector(`#${day}-${id}`).innerHTML == "") id = parseInt(id) - 1;
      let name = document.querySelector(`#${day}-${id}`).innerHTML.split(`<br>`)[0];
      name = name.split(" ").join("-");
      popupID = `#${day[0]}_${name}`;

      // unhide the description of the event
      document.querySelector(popupID).style.visibility = "visible";
    });

    e.addEventListener("mouseout", l => {
      // hide the description of the event
      document.querySelector(popupID).style.visibility = "hidden";
    });
  });
});
