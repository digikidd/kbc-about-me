$(document).ready(function() {

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if

              // clicking the "down" button will make the page scroll to the $elem's height
    $('#nav_down').click(
        function (e) {
            $('html, body').animate({scrollTop: $elem.height()}, 800);
        }
    );
        // clicking the "up" button will make the page scroll to the top of the page
    $('#nav_up').click(
        function (e) {
            $('html, body').animate({scrollTop: '0px'}, 800);
        }
    );
    });


var infinite = new Waypoint.Infinite({
  element: $('.infinite-container')[0]
})


});
