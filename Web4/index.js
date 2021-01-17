let burg = document.getElementById("burgr");
let nav = document.getElementById("nav")
let flag = true;



    burg.onclick = function but () {
        if(flag){
           nav.style.top = "85px"
            flag = false;
        }else{
            nav.style.top = "-300px"
            flag = true;
        }
    };

let down = document.getElementById("LoadMoreWork")
let imgItems_one = document.getElementById("new-mek")
let imgItems_two = document.getElementById("new-erku")
let imgItems_three = document.getElementById("new-ireq")
let imgItems_four= document.getElementById("new-chors")
down.onclick = function () {
    if(flag) {
        imgItems_one.style.display = "block"
        imgItems_two.style.display = "block"
        imgItems_three.style.display = "block"
        imgItems_four.style.display = "block"

        flag = false
    }else{
        imgItems_one.style.display = "none"
        imgItems_two.style.display = "none"
        imgItems_three.style.display = "none"
        imgItems_four.style.display = "none"
        flag = true
    }

}

var myVideo = document.getElementById("videoOne");
let play =  document.getElementById("playPouse");
let vid =  document.getElementById("videoDiv");


 vid.onclick = function () {
     if (myVideo.paused) {
         myVideo.play();
         myVideo.style.zIndex = "5";
         myVideo.style.opacity = "1";

     } else {
         myVideo.pause();
         myVideo.style.zIndex = "-1";
         myVideo.style.opacity = "0";
     }
 }


$(document).ready(function () {
    $('.slider').slick({
        arrows:false,
        slidesToShow: 1,
        variableWidth: false,
        touchThreshold: 30,
        speed: 300,
        dots: true,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 2000,






    })
})