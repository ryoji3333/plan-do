$(function() {
  $.datepicker.setDefaults( $.datepicker.regional[ "ja" ] );
  $('.datepicker').datepicker({

    numberOfMonths:3,
    
  });
});

// $(function($) {
//  $(".form-date").on("click", function() {
//   // idに付与するための行番号を取得
//   row = parseInt($(".form-date").attr("data-row"))+1;
//   // 行番号を更新
//   $(".form-date").attr("data-row", row);
//   // カレンダーフォームにidを設定
//   $(".form-date").attr("id", "date4_"+row);
//   // カレンダーイベントの再設定
//   $("#date4_"+row).removeClass("hasDatepicker").off("focusin").on("focusin", function(e) {
//    $("#date4_"+row).datepicker({
//     numberOfMonths:3,
//    });
//   });
//  });
// //  $(".datepicker").datepicker();
// });

$(function() {
  $(".js-modal-open-edittask").on("click", function() {
    row = $(this).attr("data-row");
    console.log(row)
    $("#ui-datepicker-div").remove();
    $('.form-date').removeClass("hasDatepicker")
    $('.form-date[data-row =' + row + ']').datepicker({
      numberOfMonths:3,
    });
  });
});