$('#currentDay').text('Today is: ' + dayjs().format('dddd, MM/DD/YY'));
$(function loadTimeBlocks () {
  for (let i = 9; i < 18; i++) {
    let time = dayjs().format('H')
    let timeBlock = $('<div id = "hour-' + i + '" class = "row time-block past" id="test"></div>')
    $('#timeBlockContainer').append(timeBlock)
    if(i < time) {
      timeBlock.addClass("past")
    } else if( i == time) {
      timeBlock.addClass("present")
    } else {
      timeBlock.addClass("future")
    }
    timeBlock.append('<div class = "col-2 col-md-1 hour text-center py-3">' + i + ':00' + '</div>');
    if(localStorage.getItem('hour-'+i) != null) {
      timeBlock.append('<textarea class = "col-8 col-md-10 description" rows="3">' + localStorage.getItem('hour-'+i) + '</textarea>');
    } else {
      timeBlock.append('<textarea class = "col-8 col-md-10 description" rows="3"></textarea>');
    }
    timeBlock.append('<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>');
  }
})
$(function saveEvent() {
  $('.saveBtn').on('click', function() {
    let savedString = $(this).prev().val();
    let btnParentId = $(this).parent().attr('id');
    localStorage.setItem(btnParentId, savedString)
  })
})


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  // TODO: Add code to display the current date in the header of the page.
});
