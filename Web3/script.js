 let forMore = document.getElementById("forMore");
 let Text = document.getElementById("Text");
 var loremHead = "Just to be clear, we do this for fun not for you, just kidding."
 var lorem = "What is Lorem Ipsum?\n" +
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
 let flag = true

let UL = document.getElementById('headerUL')
 function burger() {
  if(flag){

      UL.style.marginLeft = '0px'
      flag = false
  }else{
      UL.style.marginLeft = '-9999px'
      flag = true
  }

 }

 let dot1 = document.getElementById("circle1")
 let dot2 = document.getElementById("circle2")
 let dot3 = document.getElementById("circle3")


let dotsText = document.getElementById("circleText");

dot1.onclick = function () {
  dotsText.innerHTML = "We build it with passion"
    loremHead = "Just to be clear, we do this for fun not for you, just kidding."
    Text.innerHTML = loremHead



}
    dot2.onclick = function () {
        dotsText.innerHTML = "What is Lorem Ipsum?";
        loremHead = "What is Lorem Ipsum?"
        Text.innerHTML = loremHead



    }
 dot3.onclick = function () {
     dotsText.innerHTML = "Where does it come from?";
    loremHead = "Where doses it come from?"
     Text.innerHTML = loremHead

 }
 function one() {
     if (flag) {

         Text.innerHTML = lorem
         flag = false;
     } else {

         Text.innerHTML = loremHead
         flag = true;

     }
 };