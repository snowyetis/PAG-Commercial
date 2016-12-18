var _galleryFilePath  = "../Images/Gallery/";

$(document).ready(function () {

    navScrolling();
    navClassToggle();
    goToByScroll();
    //CarouselInit();
    EmployeeTablClicks();
    GalleryClickEvents();
    BuildPortfolioCatalogue();

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
      if (id !== undefined) {
        id = id.replace("link", "");
      // Scroll
      $('html,body').animate({
        scrollTop: $("#"+id).offset().top},'slow');
      }
      return false;
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

  function  BuildPortfolioCatalogue() {

      $.getJSON('/data/image.json', function(data) {
        $.each(data.properties, function(i,d) {

          $('<div class="grid-sizer col-xs-4 row-padding-bottom"><div class="grid-item col-xs-12">' +
            '<div class="grid-item-content"><div class="defer-image is-loading"><div data-src=' + d.url + ' class="img"></div></div>' +
            '<div class="property-description"data-img="Property-HighPoint-Exterior1.png" data-text="Property Description">' +
            '<h3>'+ d.caption  + '</h3></div></div></div>').appendTo('#propertyGrid');
          });
      });

      // Call Image Manager to load new images.
      // $.getScript( "/Javascripts/image-manager.js", function( data, textStatus, jqxhr ) {
      //     console.log( data ); // Data returned
      //     data.deferImage();
      //     console.log( textStatus ); // Success
      //     console.log( jqxhr.status ); // 200
      //     console.log( "Load was performed." );
      //   });
  }


// Prototype
function CarouselInit () {
    $('.carousel .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      }
      else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
  });
}
