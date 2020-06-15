$(function(){
  $('.js-modal-open').on('click',function(){
      let tasklist = $(this).data("id")
      console.log(tasklist)
      $( '.js-modal[data-id = "' + tasklist + '"]' ).fadeIn();
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  });
});