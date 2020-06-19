$(function() {
  $( '.sortable-tasklist' ) . sortable({
    connectWith: '.sortable-tasklist',
    cursor: 'grabbing',
    // placeholder: 'sortable-tasklist-placeholder',
    // forcePlaceholderSize: 'true',
    distance: '0.1',
    tolerance: 'pointer',

    start: function(e, ui){
      ui.placeholder.height(ui.helper[0].scrollHeight);
    },

    update: function(e, ui){      
      let item = ui.item;
      let item_data = item.data();
      params = { row_order_position: item.index() };
      $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        var token = $('meta[name="csrf-token"]').attr('content');
        return jqXHR.setRequestHeader('X-CSRF-Token', token);
      }); 
      $.ajax({
        type: 'put',
        url: item_data.update_url,
        dataType: 'json',
        data: params
      });
    },


  });
  $( '.sortable-tasklist' ) . disableSelection();

  $( '.sortable' ) . sortable({
    connectWith: '.sortable',
    cursor: 'grabbing',
    placeholder: 'sortable-placeholder',
    forcePlaceholderSize: 'true',
    distance: '0.1',
    tolerance: 'pointer',

    update: function(e, ui){
      let item = ui.item;
      let item_data = item.data();

      let params = { row_order_position: item.index()};
      $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        var token = $('meta[name="csrf-token"]').attr('content');
        return jqXHR.setRequestHeader('X-CSRF-Token', token);
      }); 
      $.ajax({
        type: 'put',
        url: item_data.update_url,
        dataType: 'json',
        data: params
      });

      // let tasklist = $(".sortable-task-").data('list-id')
      // console.log(tasklist)
      // $(".sortable-task-parent li").data()

    },


  });
  $( '.sortable' ) . disableSelection();
});
