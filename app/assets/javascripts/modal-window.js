$(function(){
  $('.js-modal-open').on('click',function(){
      let tasklist = $(this).data("id")
      $( '.js-modal[data-id = "' + tasklist + '"]' ).show();
      $('input:visible').eq(0).focus();
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').hide();
      return false;
  });
});

$(function(){
  $('.js-modal-open-tasklist').on('click',function(){
      $( '.js-modal-tasklist' ).show();
      $('input:visible').eq(0).focus();
      return false;
  });
  $('.js-modal-close-tasklist').on('click',function(){
      $('.js-modal-tasklist').hide();
      return false;
  });
});

$(function(){
  $('.js-modal-open-edittask').on('click',function(){
      let id = $(this).data("id")
      $( '.js-modal-edittask[data-id = "' + id + '"]' ).show();
      $('input:visible').eq(0).focus();
      return false;
  });
  $('.js-modal-close-edittask').on('click',function(){
      $('.js-modal-edittask').hide();
      return false;
  });
});