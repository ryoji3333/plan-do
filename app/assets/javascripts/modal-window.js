$(function(){
  $('.js-modal-open').on('click',function(){
      let tasklist = $(this).data("id")
      $( '.js-modal[data-id = "' + tasklist + '"]' ).fadeIn();
      $('input:visible').eq(0).focus();
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  });

});