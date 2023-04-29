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
var outputdiv = document.querySelector("#output");
 // console.log(txtInput);

   var serverURL =" https://api.funtranslations.com/translate/ferb-latin.json" 
    function doFetch(text){
      return serverURL + "?" + "text=" + text
    }
//error handiling//
  function errorHandler(error){
    console.log("error occured " + error )
    alert("Something went wrong with server : please try again letter after some time")
  }
  
   function myfunction(){
      var inputText = txtInput.value;  // taking input

      // calling server for processing
      fetch(doFetch(inputText))
        .then(response=>response.json())
        .then(json => {
          var translatedText = json.contents.translated;
          outputdiv.innerText = translatedText ;
        })
        .catch(errorHandler)
   }; 
   btnTranslate.addEventListener("click", myfunction);


    //   console.log(txtInput.value);
      //outputdiv.innerText= "ida pinda hula " + txtInput.value;