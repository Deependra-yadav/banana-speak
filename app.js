//console.log("console is working");
// let  question=prompt("let me know your name");
// alert("this is working fine " + question);
// var txtInput = document.querySelector("#txt-input"); 
// const btnTranslate = document.getElementById("btn-translate");
// btnTranslate.addEventListener("click", function myfunction(){
//    console.log("btn clicked");
//    console.log("input".txtInput.value);
// //    document.getElementById("demo").innerHTML="hello there";
// });
// // function myfunction(){
// //     document.getElementById("demo").innerHTML="hello there";
// // }
var btnTranslate = document.querySelector("#btn-translate");
var txtInput  = document.querySelector("#txt-input");
 // console.log(txtInput);
   
   function myfunction(){
      console.log(txtInput.value);
   } 
   btnTranslate.addEventListener("click", myfunction);