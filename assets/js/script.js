// jQuery shorthand to set the function to await being called until after the DOM fully loads
$(function () {

  // Individual buttons for each timeblock's texct input and save button. Should be easier to organize instead of running for loops and verifying selection.
  var am9BtnEl = document.querySelector("#am9Btn");
  var am9EventEl = document.getElementById("#am9Event");
  
  var am10BtnEl = document.querySelector("#am10Btn");
  var am10EventEl = document.querySelector("#am10Event");

  var am11BtnEl = document.querySelector("#am11Btn");
  var am11EventEl = document.querySelector("#am11Event");

  var pm12BtnEl = document.querySelector("#pm12Btn");
  var pm12EventEl = document.querySelector("#pm12Event");

  var pm1BtnEl = document.querySelector("#pm1Btn");
  var pm1EventEl = document.querySelector("#pm1Event");

  var pm2BtnEl = document.querySelector("#pm2Btn");
  var pm2EventEl = document.querySelector("#pm2Event");

  var pm3BtnEl = document.querySelector("#pm3Btn");
  var pm3EventEl = document.querySelector("#pm3Event");

  var pm4BtnEl = document.querySelector("#pm4Btn");
  var pm4EventEl = document.querySelector("#pm4Event");

  var pm5BtnEl = document.querySelector("#pm5Btn");
  var pm5EventEl = document.querySelector("#pm5Event");
    


  // Time display in header with date. Time will be used to keep planner colour coordination up to date.
  const timeDisplayEl = $('#currentDay');

  // Allows the timetableContainer element to be selected for use under pastPresFuture function
  var timetableEl = document.querySelector("#timetableContainer");





  // Clock and Date function, allows it to be periodically updated every 1000 ms
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  // Calls the display time function immediately to load with an interval at 1 second of reloading.
  displayTime();
  setInterval(displayTime, 1000);
  


  // Clock checker for comparing current hour to each timeblock and colour coding by past/present/future
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

        // else if statement to check if the timeblock is in the future
        else if (i+9 > currHour) {
          timetableEl.children[i].className = "row time-block future";
        }

        // else if statement to check if the timeblock is in the future
        else if (i+9 < currHour) {
          timetableEl.children[i].className = "row time-block past";
        }
      }
    }

    // Calls for the pastPresFuture function to be run once DOM is loaded
    pastPresFuture();



    

  ////////// 9 am Input Save and Button Listener //////////
  // Retrieves the locally saved value of the 9 am events
  am9SavedEvent = JSON.parse(localStorage.getItem("am9Event"));
  document.getElementById("am9Event").innerHTML = am9SavedEvent;

  // Event Listener for the "Save" button and ties it to input text field for the event
  am9BtnEl.addEventListener("click", function () {

    // Saves the current input value of the timeblock and saves it in a variable
    let savedEvent = document.getElementById("am9Event").value;

    // Saves the text input to local storage
    localStorage.setItem("am9Event", JSON.stringify(savedEvent));
    console.log(JSON.parse(localStorage.getItem("am9Event")));
  });

  ////////// 10 am Input Save and Button Listener //////////
  // Retrieves the locally saved value of the 10 am events
  am10SavedEvent = JSON.parse(localStorage.getItem("am10Event"));
  document.getElementById("am10Event").innerHTML = am10SavedEvent;
  
  // Event Listener for the "Save" button and ties it to input text field for the event
  am10BtnEl.addEventListener("click", function () {
  
    // Saves the current input value of the timeblock and saves it in a variable
    let savedEvent = document.getElementById("am10Event").value;
  
    // Saves the text input to local storage
    localStorage.setItem("am10Event", JSON.stringify(savedEvent));
    console.log(JSON.parse(localStorage.getItem("am10Event")));
    });
  
  ////////// 11 am Input Save and Button Listener //////////
  // Retrieves the locally saved value of the 11 am events
  am11SavedEvent = JSON.parse(localStorage.getItem("am11Event"));
  document.getElementById("am11Event").innerHTML = am11SavedEvent;

  // Event Listener for the "Save" button and ties it to input text field for the event
  am11BtnEl.addEventListener("click", function () {

    // Saves the current input value of the timeblock and saves it in a variable
    let savedEvent = document.getElementById("am11Event").value;

    // Saves the text input to local storage
    localStorage.setItem("am11Event", JSON.stringify(savedEvent));
    console.log(JSON.parse(localStorage.getItem("am11Event")));
  });

  ////////// 12 pm Input Save and Button Listener //////////
  // Retrieves the locally saved value of the 12 pm events
  pm12SavedEvent = JSON.parse(localStorage.getItem("pm12Event"));
  document.getElementById("pm12Event").innerHTML = pm12SavedEvent;

  // Event Listener for the "Save" button and ties it to input text field for the event
  pm12BtnEl.addEventListener("click", function () {

    // Saves the current input value of the timeblock and saves it in a variable
    let savedEvent = document.getElementById("pm12Event").value;

    // Saves the text input to local storage
    localStorage.setItem("pm12Event", JSON.stringify(savedEvent));
    console.log(JSON.parse(localStorage.getItem("pm12Event")));
  });

  ////////// 1 pm Input Save and Button Listener //////////
  // Retrieves the locally saved value of the 1 pm events
  pm1SavedEvent = JSON.parse(localStorage.getItem("pm1Event"));
  document.getElementById("pm1Event").innerHTML = pm1SavedEvent;

  // Event Listener for the "Save" button and ties it to input text field for the event
  pm1BtnEl.addEventListener("click", function () {

    // Saves the current input value of the timeblock and saves it in a variable
    let savedEvent = document.getElementById("pm1Event").value;

    // Saves the text input to local storage
    localStorage.setItem("pm1Event", JSON.stringify(savedEvent));
    console.log(JSON.parse(localStorage.getItem("pm1Event")));
  });

  ////////// 2 pm Input Save and Button Listener //////////
  // Retrieves the locally saved value of the 2 pm events
  pm2SavedEvent = JSON.parse(localStorage.getItem("pm2Event"));
  document.getElementById("pm2Event").innerHTML = pm2SavedEvent;

  // Event Listener for the "Save" button and ties it to input text field for the event
  pm2BtnEl.addEventListener("click", function () {

    // Saves the current input value of the timeblock and saves it in a variable
    let savedEvent = document.getElementById("pm2Event").value;

    // Saves the text input to local storage
    localStorage.setItem("pm2Event", JSON.stringify(savedEvent));
    console.log(JSON.parse(localStorage.getItem("pm2Event")));
  });

  ////////// 3 pm Input Save and Button Listener //////////
  // Retrieves the locally saved value of the 3 pm events
  pm3SavedEvent = JSON.parse(localStorage.getItem("pm3Event"));
  document.getElementById("pm3Event").innerHTML = pm3SavedEvent;

  // Event Listener for the "Save" button and ties it to input text field for the event
  pm3BtnEl.addEventListener("click", function () {

    // Saves the current input value of the timeblock and saves it in a variable
    let savedEvent = document.getElementById("pm3Event").value;

    // Saves the text input to local storage
    localStorage.setItem("pm3Event", JSON.stringify(savedEvent));
    console.log(JSON.parse(localStorage.getItem("pm3Event")));
  });

  ////////// 4 pm Input Save and Button Listener //////////
  // Retrieves the locally saved value of the 4 pm events
  pm4SavedEvent = JSON.parse(localStorage.getItem("pm4Event"));
  document.getElementById("pm4Event").innerHTML = pm4SavedEvent;

  // Event Listener for the "Save" button and ties it to input text field for the event
  pm4BtnEl.addEventListener("click", function () {

    // Saves the current input value of the timeblock and saves it in a variable
    let savedEvent = document.getElementById("pm4Event").value;

    // Saves the text input to local storage
    localStorage.setItem("pm4Event", JSON.stringify(savedEvent));
    console.log(JSON.parse(localStorage.getItem("pm4Event")));
  });

  ////////// 5 pm Input Save and Button Listener //////////
  // Retrieves the locally saved value of the 5 pm events
  pm5SavedEvent = JSON.parse(localStorage.getItem("pm5Event"));
  document.getElementById("pm5Event").innerHTML = pm5SavedEvent;

  // Event Listener for the "Save" button and ties it to input text field for the event
  pm5BtnEl.addEventListener("click", function () {

    // Saves the current input value of the timeblock and saves it in a variable
    let savedEvent = document.getElementById("pm5Event").value;

    // Saves the text input to local storage
    localStorage.setItem("pm5Event", JSON.stringify(savedEvent));
    console.log(JSON.parse(localStorage.getItem("pm5Event")));
  });





  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});