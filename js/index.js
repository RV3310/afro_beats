
$(document).ready(function() {

// variables
var ww = $(window).width();


$(window).resize(function() { 
	if ($(window).width() < 880) { 
		$(".index_1").hide(); 
	} else { 
		$(".index_1").show();
} 
})

$(window).resize(function() { 
  if ($(window).width() > 600) { 
    $(".lrgscrtxt").show(); 
    $(".first").hide();
  } else { 
    $(".lrgscrtxt").hide();
    $(".first").show();
} 
})


// OVERLAY 
  $(".menu-link").click(function(event) {
    event.preventDefault();
    $(".overlay").toggleClass("open");
    $(".menu").toggleClass("open");
    $("h1").toggleClass("hidden");
  });

// SHOW/HIDE FUNCTIONS

// index

function learnMore() {
	event.preventDefault();
	$(".first").hide();
	$(".second").show();
}

function goBack() {
	event.preventDefault();
	$(".first").show();
	$(".second").hide();
}

$(".goforward").click(learnMore);
$(".goback").click(goBack);

});


// ARTISTIS PAGE

// 3D carousel

// define variables
var carousel = $(".carousel"),
    currdeg  = 0;

// define click events

// syntax $(selector).on(event=click,child selector=block in carousel,function=rotate())



$(".next").on("click", {kuti: "n"}, rotate);
$(".prev").on("click", {kuti: "p"}, rotate);

function rotate(e){
  // if click event is next
  if(e.data.kuti=="n"){
  // change the degree varible from current posiion but 90deg clockwise 
    currdeg = currdeg - 90;
  }
  // if click event is previous
  if(e.data.kuti=="p"){
  //change the degree variable from it's current posiion but 90deg anti-clockwise 
    currdeg = currdeg + 90;
  }
  // rotate carrousel via variable
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

/*******************************
DRUMS PAGE
*******************************/

// data target instruments to hide/show addition info

$('.js-instrument').on('click', function() {
  // get datat key fot link that's been clicked on
  var instrument = $(this).data('instrument');
// hide the map and its contents
  $(".instr").hide();
  // show the hidden box with the corresponding data key
  $('.box.' + instrument).show();
});

$(".return").on("click", function() {
  // find the data key for this link
  var instrument = $(this).data('instrument');
  // find the youtube video playing in this div
  var $iframe = $(this).closest('p').siblings('iframe');
// reset the video to it's original state (i.e. not plying)
  $iframe.attr('src', $iframe.attr('src'));
// show the map and it's contents
    $(".instr").show();
    // hide the div of corresponding more info data key
   $('.box.' + instrument).hide();
})

/*************************************
ARTISTS PAGE
************************************/

// hide/show carousel

$('.js-artist').on('click', function() {
  // get datat key fot link that's been clicked on
  var artist = $(this).data('artist');
  // hide the buttons, carousel and its contents
  $('.carousel').hide();
  $('.buttons').hide();
  // show additional info
  $('.moretxt.' + artist).show();
})

$('.learnlater').on('click', function() {
  var artist = $(this).data('artist');
  // find the youtube video playing in this div
  var $iframe = $(this).closest('p').siblings('iframe');
  // reset the video to it's original state (i.e. not plying)
  $iframe.attr('src', $iframe.attr('src'));

  $('.carousel').show();
  $('.buttons').show();
  $('.moretxt.' + artist).hide();
  $('video')[0].pause();
})


/*************************************
BEATS
*************************************/

// target instruments and sounds via keyboard

$(function() {
  $(this).keydown(function(event) {
    // find the data code when this key is pressed
    var key = $(this).find('.key[data-key='+event.which+']');
    // find the first audio file with the corresponding data code
    var audio = $(this).find('audio[data-key='+event.which+']')[0];
    // toggle animation .playing
    key.toggleClass('playing');
    // if no audio do nothing
    if (!audio) return;
    // play audio from the start of thefile
    audio.play();
    audio.currentTime = 0;
  });
$(this).keyup(function(event) {
  var key = $(this).find('.key[data-key='+event.which+']');
  key.toggleClass('playing');
});
});


// target instruments and sounds via click events
// why doesn't the above format work for click events?


$(function() {
  $('.key').click(function(event) {
    // get the keycode for the link tat's been clicked on
    var key = $(this).data('key');
    // find the first matching audio sound with the corresponding key code
    var audio = $('.a' + key)[0];
    // if there is no corresponding audio do nothing
     if (!audio) return;
     // if there is a correspoding key code play the audio
     audio.play();
     // play the audio file from the start
     audio.currentTime = 0;
  });
});


