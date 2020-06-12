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
      // console.log(ui.item.attr('data-model_id'));
      let item = ui.item;
      let item_data = item.data();
      let params = {_method: 'put'};
      params = item_data.model_id;
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
      // console.log(ui.item.attr('data-model_id'));
      let item = ui.item;
      let item_data = item.data();
      let params = {_method: 'put'};
      params = item_data.model_id;
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
  $( '.sortable' ) . disableSelection();
});