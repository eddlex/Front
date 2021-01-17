
let b_1 = document.querySelector('#b1');
let b_3 = document.querySelector('#b3');
let b_2 = document.querySelector('#b2');

var flag = true;
let li_1 = document.getElementById("li")
 function  bt(){
if (flag ){
    //li_1.style.display = 'block';
     li_1.style.top = '148px'
    li_1.style.opacity = 1
     b_1.style.transform = "translateY(15px)rotate(45deg)"
     b_3.style.transform = "translateY(-15px)rotate(-45deg)"
     b_2.style.opacity = '0'
    flag = false;
}else {
  //  li_1.style.display = 'none';
    li_1.style.top = '-500px'
    li_1.style.opacity = 0
    b_1.style.transform = "translateY(0px)rotate(-180deg)"

    b_3.style.transform = "translateY(0px)rotate(180deg)"
    b_2.style.opacity = '1'
    flag = true;
}

}

let select_A = document.getElementById("selectA");
let rus = document.getElementById("rus");
function sel() {
if(flag){
    rus.style.transform = "rotate(-10deg)"
    select_A.style.display = "flex";
    flag = false
}else{
    rus.style.transform = "rotate(0deg)"
    select_A.style.display = "none";
    flag = true
}
}


let underButton = document.getElementById("under");
let Div1 = document.getElementById("Div1")
let Div2 = document.getElementById("Div2")
let Div3 = document.getElementById("Div3")
let Div4 = document.getElementById("Div4")
let Div5 = document.getElementById("Div5")
let Div6 = document.getElementById("Div6")
let Div7 = document.getElementById("Div7")
let Div8 = document.getElementById("Div8")
let Div9 = document.getElementById("Div9")
let Div10 = document.getElementById("Div10")
let Div11 = document.getElementById("Div11")



function underBut(){
    if(flag){
      underButton.style.transform = "rotate(180deg)"
        underButton.style.opacity = 1
        underButton.style.transition = "0.5s"
        Div1.style.display = "block"
        Div2.style.display = "block"
        Div4.style.display = "block"
        Div3.style.display = "block"
        Div5.style.display = "block"
        Div6.style.display = "block"
        Div7.style.display = "block"
        Div8.style.display = "block"
        Div9.style.display = "block"
        Div10.style.display = "block"
        Div11.style.display = "block"



        flag = false
    }else {
        underButton.style.transform = "rotate(270deg)"
        underButton.style.opacity = 0.7
        underButton.style.transition = "0.5s"
        Div1.style.display = "none"
        Div2.style.display = "none"
        Div4.style.display = "none"
        Div3.style.display = "none"
        Div5.style.display = "none"
        Div6.style.display = "none"
        Div7.style.display = "none"
        Div8.style.display = "none"
        Div9.style.display = "none"
        Div10.style.display = "none"
        Div11.style.display = "none"
        flag = true
    }


}
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 5,
        variableWidth: false,
        touchThreshold: 30,
        speed: 100,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 5000,

        responsive: [
            {
                breakpoint: 856,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 719,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 553,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
})
