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

$(function(){
  $('.js-modal-open-tasklist').on('click',function(){
      $( '.js-modal-tasklist' ).fadeIn();
      $('input:visible').eq(0).focus();
      return false;
  });
  $('.js-modal-close-tasklist').on('click',function(){
      $('.js-modal-tasklist').fadeOut();
      return false;
  });

});