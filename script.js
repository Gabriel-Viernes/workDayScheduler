$('#currentDay').text('Today is: ' + dayjs().format('dddd, MM/DD/YY'));
$(function loadTimeBlocks () {
  for (let i = 9; i < 18; i++) {
    let timeBlock = $('<div id = "hour-' + i + '" class = "row time-block past" id="test"></div>')
    $('#timeBlockContainer').append(timeBlock)
    if(i < dayjs().format('H')) {
      timeBlock.addClass("past")
    } else if( i == dayjs().format('H')) {
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
    localStorage.setItem($(this).parent().attr('id'), $(this).prev().val())
  })
})