
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
  $('video')[0].pause();
})


/*************************************
BEATS
*************************************/

$(function() {
  $(this).keydown(function(event) {
    var key = $(this).find('.key[data-key='+event.which+']');
    console.log(key);
    var audio = $(this).find('audio[data-key='+event.which+']')[0];
    console.log(audio);
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
  $('.key').click(function(event) {
    var key = $(this).data('key');
    var audio = $('.a' + key)[0];
     console.log(audio);
     $('.key' + key).toggleClass('playing');
     if (!audio) return;
     audio.play();
     audio.currentTime = 0;
  });
});


// $(function() {
//   $(".65").click(function(event) {
//      var audio = $(".a65")[0];
//      audio.play();
//      audio.currentTime = 0;
// })
// });

// $(function() {
//   $(".83").click(function(event) {
//      var audio = $(".a83")[0];
//      audio.play();
// });
// });

// $(function() {
//   $(".68").on("click", function() {
//      var x = $(".a68")[0];
//      x.play();
// });
// });

// $(function() {
//   $(".70").on("click", function() {
//      var audio = $(".a70")[0];
//      audio.play();
// });
// });


// $(function() {
//   $(".71").on("click", function() {
//      var audio = $(".a71")[0];
//      audio.play();
// });
// });


// $(function() {
//   $(".72").on("click", function() {
//      var audio = $(".a72")[0];
//      audio.play();
// });
// });

// $(function() {
//   $(".74").on("click", function() {
//      var audio = $(".a74")[0];
//      audio.play();
// });
// });


// $(function() {
//   $(".75").on("click", function() {
//      var audio = $(".a75")[0];
//      audio.play();
// });
// });


// $(function() {
//   $(".76").on("click", function() {
//      var audio = $(".a76")[0];
//      audio.play();
// });
// });
