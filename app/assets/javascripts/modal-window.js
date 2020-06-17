$(function(){
  $('.js-modal-open').on('click',function(){
      let id = $(this).data("id")
      $( '.js-modal[data-id = "' + id + '"]' ).show();
      $('input:visible').eq(0).focus();
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').hide();
      // $('.send-task-form').submit();
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
      $('.send-tasklist-form').submit();
      return false;
  });
});

$(function(){
  $('.js-modal-open-edittask').on('click',function(){
      let id = $(this).data("id")
      $( '.js-modal-edittask[data-id = "' + id + '"]' ).show();
      var v = $('input:visible').eq(0).val();
      $('input:visible').eq(0).val('');
      $('input:visible').eq(0).focus().val(v);
      return false;
  });
  $('.js-modal-close-edittask').on('click',function(){
    $('.js-modal-edittask').hide();
    $('.send-edittask-form').submit();
    return false;
  });
});

$(function(){
  $('.js-modal-open-edittasklist').on('click',function(){
      let id = $(this).data("id")
      $( '.js-modal-edittasklist[data-id = "' + id + '"]' ).show();
      var v = $('input:visible').eq(0).val();
      $('input:visible').eq(0).val('');
      $('input:visible').eq(0).focus().val(v);
      return false;
  });
  $('.js-modal-close-edittasklist').on('click',function(){
      $('.js-modal-edittasklist').hide();
      $('.send-edittasklist-form').submit();
      return false;
  });
});