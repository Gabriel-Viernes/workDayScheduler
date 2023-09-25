// displays current day as: "Today is Tuesday, 01,01,1901"
$('#currentDay').text('Today is: ' + dayjs().format('dddd, MM/DD/YY'));
// appends time blocks to site, pulls appropriate data from localStorage and displays it
$(function loadTimeBlocks () {
  for (let i = 9; i < 18; i++) {
    // reformats 24h to 12h
    let reformat;
    if(i > 12) {
      reformat = (i - 12) + ':00 PM'
    } else {
      reformat = i + ':00 AM'
    }
    // appends time blocks to html
    let timeBlock = $('<div id = "hour-' + i + '" class = "row time-block past" id="test"></div>')
    $('#timeBlockContainer').append(timeBlock)
    // colors blocks depending on current time
    if(i < dayjs().format('H')) {
      timeBlock.addClass("past")
    } else if( i == dayjs().format('H')) {
      timeBlock.addClass("present")
    } else {
      timeBlock.addClass("future")
    }
    timeBlock.append('<div class = "col-2 col-md-1 hour text-center py-3">' + reformat + '</div>');
    if(localStorage.getItem('hour-'+i) != null) {
      timeBlock.append('<textarea class = "col-8 col-md-10 description" rows="3">' + localStorage.getItem('hour-'+i) + '</textarea>');
    } else {
      timeBlock.append('<textarea class = "col-8 col-md-10 description" rows="3"></textarea>');
    }
    timeBlock.append('<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>');
  }
})

// adds event listeners to every save button and saves text in the text area to localStorage
$(function saveEvent() {
  $('.saveBtn').on('click', function() {
    localStorage.setItem($(this).parent().attr('id'), $(this).prev().val())
  })
})