$(function()  {
  let tabs = $(".menu-item");

  function tabSwitch() {

    $(".project-active").removeClass("project-active");

    $(this).addClass("project-active");

    const index = tabs.index(this);

    $(".contents").removeClass("show").eq(index).addClass("show");
  }
  
  tabs.click(tabSwitch);    
});