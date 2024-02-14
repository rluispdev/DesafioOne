 
 
  
function elementVisibility() {
    document.getElementById("message").style.visibility = "hidden";
    var inputText = document.getElementById("message").value;

    var buttonElement = document.getElementById("myButton");
    buttonElement.style.visibility = "visible";
    if (buttonElement.style.visibility === `visible`){
     buttonElement.style.marginTop = `781px`
    }
  }

  document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("showText").innerText = inputText;
    let encoded = window.btoa(inputText);
    document.getElementById("showText").innerHTML = encoded;
 })

  function configVisibility() {
    var displayVisibility = document.getElementById('myDIV');
    if (displayVisibility.style.display === 'none') {
      displayVisibility.style.display = 'none';

    } else {
      displayVisibility.style.display = "none";
      var inputText = elementVisibility(); // Chama elementVisibility para obter o inputText
      document.getElementById("showText").innerText = inputText;
      let encoded = window.btoa(inputText);
      document.getElementById("showText").innerHTML = encoded;
    }
  }
  

 