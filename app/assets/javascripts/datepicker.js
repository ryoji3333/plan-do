$(function() {
  $.datepicker.setDefaults( $.datepicker.regional[ "ja" ] );
  $('.datepicker').datepicker({

    numberOfMonths:3,
    
  });
});


// $(function() {
//   $(".js-modal-open-edittask").on("click", function() {
//     row = $(this).attr("data-row");
//     console.log(row)
//     $("#ui-datepicker-div").remove();
//     $('.form-date').removeClass("hasDatepicker")
//     $('.form-date[data-row =' + row + ']').datepicker({
//       numberOfMonths:3,
//     });
//   });
// });