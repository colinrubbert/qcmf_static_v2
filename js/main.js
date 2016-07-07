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
