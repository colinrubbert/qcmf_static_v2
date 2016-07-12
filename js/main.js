// jQuery
$(function(){
  mobileNavigationToggle();
  galleryAlbumSwitcher();
});

// Function to slide open and close the mobile navigation menu
function mobileNavigationToggle() {
  $('.navigation-mobile-toggle').click(function() {
    $('#mobile-navigation').slideToggle(300);
  });
}

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
