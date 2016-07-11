// jQuery
$(function(){
  mobileNavigationToggle();
});

// Function to slide open and close the mobile navigation menu
function mobileNavigationToggle() {
  $('.navigation-mobile-toggle').click(function() {
    $('#mobile-navigation').slideToggle(300);
  });
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
