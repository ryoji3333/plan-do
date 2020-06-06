document.addEventListener("turbolinks:load", function() {
  $.datepicker.setDefaults( $.datepicker.regional[ "ja" ] );
  $('#datepicker').datepicker({

    numberOfMonths:3,
    
  });
});