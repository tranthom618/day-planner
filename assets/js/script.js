// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



// jQuery shorthand to set the function to await being called until after the DOM fully loads
$(function () {

    // Time display in header with date. Time will be used to keep planner colour coordination up to date.
    const timeDisplayEl = $('#currentDay');

    function displayTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      timeDisplayEl.text(rightNow);
    }

    // Calls the display time function immediately to load with an interval at 1 second of reloading.
    displayTime();
    setInterval(displayTime, 1000);

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  var timetableEl = document.querySelector("#timetableContainer");
  
  function pastPresFuture() {
    
    // dayjs format to retrieve just the hour in 24 hour format
    var currHour = dayjs().format('H');

    // Ensures the currHour is a number and not a string
    currHour = Number(currHour);

    // For loop that'll cycle through each timeblock checking it's relation to the current time.
    for (i = 0; i < timetableEl.children.length; i++) {

        // if statement to verify if the current i timeblock is the same as the current hour
        // Starting at 9 because i starts at 0, the work planner starts at 9 am.
        if (i+9 == currHour) {
          timetableEl.children[i].className = "row time-block present";
        }

        // By the time the currhour reaches 1 pm, 'i' will be 5, so to compare them, i has to be subtracted to check if the timeblock is in the present.
        else if (i+9 > currHour) {
          timetableEl.children[i].className = "row time-block future";
        }


        else if (i+9 < currHour) {
          timetableEl.children[i].className = "row time-block past";
        }
      }
    }

    // "row time-block present"
    // "row time-block past"
    pastPresFuture();
  }
  
  
  

  // <div id="hour-9" class="row time-block past">
  //       <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
  //       <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  //       <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  //         <i class="fas fa-save" aria-hidden="true"></i>
  //       </button>
  //     </div>


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?




  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
);
