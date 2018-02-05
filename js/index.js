
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

var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { 
  kuti: "n" 
  }, 
  rotate);
$(".prev").on("click", { 
  kuti: "p" 
  }, 
  rotate);

function rotate(e){
  if(e.data.kuti=="n"){
    currdeg = currdeg - 90;
  }
  if(e.data.kuti=="p"){
    currdeg = currdeg + 90;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}


// DRUMS PAGE

// click on tab

$('.js-instrument').on('click', function() {
  var instrument = $(this).data('instrument');

  $(".instr").hide();
  $('.box.' + instrument).show();
});

$(".return").on("click", function() {
  var instrument = $(this).data('instrument');

    $(".instr").show();
   $('.box.' + instrument).hide();
})

$('.js-artist').on('click', function() {
  var artist = $(this).data('artist');

  $('.carousel').hide();
  $('.buttons').hide();
  $('.moretxt.' + artist).show();
})

$('.learnlater').on('click', function() {
  var artist = $(this).data('artist');

  $('.carousel').show();
  $('.buttons').show();
  $('.moretxt.' + artist).hide();
})


/*************************************
BEATS
*************************************/

$(function() {
  $(this).keydown(function(event) {
    var key = $(this).find('.key[data-key='+event.which+']');
    var audio = $(this).find('audio[data-key='+event.which+']')[0];
    key.toggleClass('playing');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
  });
$(this).keyup(function(event) {
  var key = $(this).find('.key[data-key='+event.which+']');
  key.toggleClass('playing');
});
});


$(function() {
  $(this).click(function(event) {
    var key = $(this).find('.key[data-key='+event.which+']');
    var audio = $(this).find('audio[data-key='+event.which+']')[0];
    key.toggleClass('playing');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
  });
});

