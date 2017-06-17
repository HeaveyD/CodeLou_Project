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




