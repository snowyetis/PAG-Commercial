$(document).ready(function () {
  $("#navbar ul li a[href^='#']").on('click', function(e) {
     e.preventDefault();

     // animate
     $('html, body').animate({
         scrollTop: $(this.hash).offset().top
       }, 300, function(){
         window.location.hash = this.hash;
       });
     });

    $(".nav a").on("click", function(){
      console.log('clicked')
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });

    $("#employeeTabs li").click(function (e) {
      e.preventDefault();
      $("li").find(".active").removeClass("active");
      $(this).parent().addClass("active");

      var elementId = $(this).find("a").attr("href");
      var tabId = $(elementId);

      var clickedTab = $("div" + elementId + ".tab-pane");
      var previousTab = $(clickedTab).prev();
      var nextTab = $(clickedTab).next();

      if ($(nextTab).hasClass("active")) {
        $(nextTab).removeClass("active");
        $(clickedTab).addClass("active");
      } else if ($(previousTab).hasClass("active")) {
        $(previousTab).removeClass("active");
        $(clickedTab).addClass("active");
      } else {
        $(".tab-content").find('.tab-pane.active').removeClass("active");
        $(clickedTab).addClass("active");
      }
    })
});
