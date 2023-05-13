// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( document ).ready(); {

  // TODO: Add code to display the current date in the header of the page.

var currentDay = dayjs().format('DD/MM/YYYY hh:mm')
console.log(currentDay)
document.getElementById("currentDay").innerHTML = currentDay

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  var currentHour = dayjs().hour();
  var save = document.querySelectorAll(".saveBtn");
  console.log(save);
  console.log(currentHour);
  var schedule = document.getElementById("#schedule");
  var scheduleArray = [schedule];

  $(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    console.log(hour);
    console.log(text);

    localStorage.setItem(hour, text);

  });
  
  scheduleArray = [$('#schedule').children()]
  console.log(scheduleArray);
  // var hour = scheduleArray.parent().attr('id');
  // console.log(time)

  // let i = 0
  // while(scheduleArray[i] < schedule.length) {
  //   if (currentHour === dayjs().hour()) {
  //     this.classList.add("present");
  //   } else if (currentHour < dayjs().hour()) {
  //     this.classList.add()("future");
  //   }
  // }
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // function applyColors () {
  //   $('.time-block').each(function() {
  //     var selectedHour = 
  //     (this).attr('id').split('-')[1];
  //   }); //splits the word and gets the second word!!

  //   if (selectedHour === currentHour) {
  //     $(this).addClass('present');
  //   } else if (selectedHour < currentHour) {
  //     $(this).addClass('past');
  //   } else {
  //     $(this).addClass('future');
  //   }
  // };

  // applyColors()
 


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));


 
}
