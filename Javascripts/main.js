var _galleryFilePath  = "../Images/Gallery/";

$(document).ready(function () {

    navScrolling();
    navClassToggle();
    goToByScroll
    EmployeeTablClicks();
    GalleryClickEvents();

  });


function navScrolling() {
  $("#navbar ul li a[href^='#']").on('click', function(e) {
     e.preventDefault();

     $('html, body').animate({
         scrollTop: $(this.hash).offset().top
       }, 300, function(){
         window.location.hash = this.hash;
       });
     });
   }

function navClassToggle() {
    $(".nav a").on("click", function(){
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });
  }

  function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
    }


  function EmployeeTablClicks() {
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
    });
  }

  function GalleryClickEvents() {
    $('.grid-item-content').on('click','div', function(e)  {
      e.preventDefault;
      var imgSrc =  _galleryFilePath  + $(this).data('img');
      var modalText = $(this).data('text');
      // var contentText = $(this).find('#property_description').data('content');
      goToByScroll('OurProperties');
      $('#propertyGalleryModal').modal('toggle');
      $('.modal-body #propertyModalImg').attr('src',imgSrc);
      $('.modal-body #propertyText').text(modalText);
    });
  }
