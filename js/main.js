
// Function to slide open and close the mobile navigation menu
var toggleButton = document.getElementById("navigation-mobile-toggle");
var mobileMenu = document.getElementById("navigation-links-wrapper");
var navigationWrapper = document.getElementById("navigation-wrapper");
var navigation = document.getElementById("navigation");

function toggleMenu() {
  mobileMenu.classList.toggle("closed");
  toggleButton.classList.toggle("fixed");
  navigationWrapper.classList.toggle("fixed");
  navigation.classList.toggle("fixed");
}

// jQuery
$(function(){
  galleryAlbumSwitcher();
});

// Function to choose which gallery to view
function galleryAlbumSwitcher() {
  $('#carbon-steel').click(function(){
    $('#carbon-steel').addClass('active');
    $('#stainless-steel').removeClass('active');
    $('#aluminum').removeClass('active');
    $('#carbon-steel-album').show();
    $('#stainless-steel-album').hide(300);
    $('#aluminum-album').hide(300);
  })
  $('#stainless-steel').click(function(){
    $('#stainless-steel').addClass('active');
    $('#carbon-steel').removeClass('active');
    $('#aluminum').removeClass('active');
    $('#carbon-steel-album').hide(300);
    $('#stainless-steel-album').show();
    $('#aluminum-album').hide(300);
  })
  $('#aluminum').click(function(){
    $('#stainless-steel').removeClass('active');
    $('#carbon-steel').removeClass('active');
    $('#aluminum').addClass('active');
    $('#carbon-steel-album').hide(300);
    $('#stainless-steel-album').hide(300);
    $('#aluminum-album').show(300);
  })
}


// Function to display Google Maps location
function initMap() {
  var myLatLng = {lat: 44.20382, lng: -88.4934747};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'QCMF'
  });
}

// Function to run Object-Fit Modernizr for IE functionality
if ( ! Modernizr.objectfit ) {
  $('.gallery-album-item-wrapper').each(function () {
    var $container = $(this),
        imgUrl = $container.find('img').prop('src');
    if (imgUrl) {
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('compat-object-fit');
        $('.gallery-album-item').hide();
    }
  });
}
