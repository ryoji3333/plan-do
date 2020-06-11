$(function() {
  $( '.sortable' ) . sortable({
    connectWith: '.sortable',
    cursor: 'grabbing',
    placeholder: 'sortable-placeholder',
    forcePlaceholderSize: 'true',

    update: function(e, ui){
      let item = ui.item;
      let item_data = item.data();
      let params = {_method: 'put'};
      params = item_data.modelId
      params = item_data.text
      params = { row_order_position: item.index() }
      $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        var token = $('meta[name="csrf-token"]').attr('content');
        return jqXHR.setRequestHeader('X-CSRF-Token', token);
      }); 
      $.ajax({
        type: 'put',
        url: item_data.updateUrl,
        dataType: 'json',
        data: params
      });
    },


  });
  $( '.sortable' ) . disableSelection();
});