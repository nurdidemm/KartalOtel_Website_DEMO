var slides = new Array(6);
slides[0] = ["Slide 1", "otel1.jpg"];
slides[1] = ["Slide 2", "otel2.jpg"];
slides[2] = ["Slide 3", "otel3.jpg"];
slides[3] = ["Slide 4", "otel4.jpg"];
slides[4] = ["Slide 5", "otel5.jpg"];
slides[5] = ["Slide 6", "otel6.jpg"];

var slide = document.getElementById('headerIMG');
var text = document.getElementById('headerTEXT');
var i = 0;


$(document).ready(function(){
    $('nav').hide().delay(1100).fadeIn(1000);
    $('header').hide().delay(100).fadeIn(1500);
    //startSlideshow(); 
});

window.onscroll = function() {changeNavbar()};

function changeNavbar() {
    if (document.body.scrollTop > 80 && document.body.scrollTop <= 700 || document.documentElement.scrollTop > 80 &&  document.documentElement.scrollTop <= 700) {
        document.getElementsByTagName("nav")[0].style.height = "90px";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(128, 182, 230, 0.8)";
        document.getElementsByTagName("nav")[0].style.background = "linear-gradient(to bottom, rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%)";
        document.getElementsByTagName("nav")[0].style.paddingBottom = "8px";
        document.getElementsByTagName("nav")[0].style.transition = "0.8s";
        document.getElementById("logo").style.top = "10px";
        document.getElementById("logo").style.width = "70px";
    } 

    else if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementsByTagName("nav")[0].style.height = "90px";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(128, 182, 230, 1)";
        document.getElementsByTagName("nav")[0].style.background = "linear-gradient(to center, rgba(137,255,241,0) 0%,rgba(0,0,0,1) 20%)";
        document.getElementsByTagName("nav")[0].style.paddingBottom = "8px";
        document.getElementsByTagName("nav")[0].style.transition = "0.5s";
        document.getElementById("logo").style.top = "10px";
        document.getElementById("logo").style.width = "70px";
    } 

    else {
        document.getElementsByTagName("nav")[0].style.height = "122px";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "";
        document.getElementsByTagName("nav")[0].style.background = "";
        document.getElementById("logo").style.top = "8px";
        document.getElementById("logo").style.width = "100px";
    }
}

function startSlideshow() {
    $('#headerIMG').toggle('slide');

    slide.src = slides[i][1];
    i++;
    if (i == slides.length){
        i = 0;
    }

    myTimeout = setTimeout("startSlideshow()", 3000);
}

slide.addEventListener("mouseover", function() {
    $('.slideArrow').css('opacity', '0.4');
});

slide.addEventListener("mouseout", function() {
    $('.slideArrow').css('opacity', '0');
});

var slideArrows = document.getElementsByClassName("slideArrow");

for (var i=0; i < slideArrows.length; i++) {
    slideArrows[i].addEventListener("mouseover", function() {
        $('.slideArrow').css('opacity', '0.9');
});}

$(document).ready(function() {
$('.circle > img').hover( function() {
    $imgSource = $(this).attr('src');
    //alert($imgSource);
    $newSource = $imgSource.slice(0, -4).concat("HOVER.png");
    $(this).attr('src', $newSource);
}, function() {
    $(this).attr('src', $imgSource);
});
});


//$(document).ready(function() {
//$('.circle').hover( function() {
  //  $imgSource = $('.circle > img').attr('src');
  //  alert($imgSource);
  //  $newSource = $imgSource.slice(0, -4).concat("HOVER.png");
  //  $(this).attr('src', $newSource);
//}, function() {
  //  $(this).attr('src', $imgSource);
//});
//});