$("#pct_logo").hide().fadeIn(3000);


//lightbox javascript (jquery)
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//add image to overlay
$overlay.append($image);

//add caption to picture when clicked
$overlay.append($caption);

$('body').append($overlay);



//this function activates lightbox once the image is clicked

$('.imageGallery a').click(function(event){
    event.preventDefault();
   var imageLocation =  $(this).attr('href');



//update overlay with image linked in
$image.attr('src', imageLocation);

  

  //show the overlay 
  $overlay.show();



//attach caption by selecting the child's alt attribute 
var captionText = $(this).children('img').attr('alt');
$caption.text(captionText);

});

$overlay.click(function(){
    $overlay.hide();
});


/*****This section of jquery is for the page navigation links on the header allowing them to move to the correct section of the page when clicked.****/


/*this will select all links with the id hashtag */
$('a[href*= "#"]')

.click(function(event){
 if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          
          };
        });
      }
    }
  });


 