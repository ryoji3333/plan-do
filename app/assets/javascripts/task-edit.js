document.addEventListener("turbolinks:load", function() {
    $('.task-text').click(function(){
        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            var txt = $(this).text();
            $(this).html('<input type="text" value="'+txt+'" />');
            $(this).change(function(){
                console.log("bb");
                $('#task-form').submit();
            });
            $('.task-text > input').focus().blur(function(){
                var inputVal = $(this).val();
                if(inputVal===''){
                    inputVal = this.defaultValue;
                };
                $(this).parent().removeClass('on').text(inputVal);
            });
        };
    });
  });

  
$('#task-text').change(function() {

});