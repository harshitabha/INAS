// THIS JS WAS IMPORTED FROM BULMA

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal if all vals are filled out
  const eCat = document.querySelector("#cats");
  const eName = document.querySelector("#eName");
  const stTime = document.querySelector("#stTime");
  const edTime = document.querySelector("#edTime");
  const days = document.querySelectorAll(".dayBtn");
  let clickDays = {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  };
  // update the selected days
  days.forEach(btn => {
    btn.addEventListener("click", c => {
      clickDays[btn.id] = !clickDays[btn.id];
    });
  });

  (document.querySelectorAll('#save') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      //if a val has been selected for the required 
      if (eCat !== "default" && eName !== "" && stTime !== "" && edTime !== "" && Object.values(clickDays).includes(true)) {
        console.log("entered");
        closeModal($target);
      }
      else { alert("Please fill out all required values"); }
    });
  });

});