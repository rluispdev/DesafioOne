 
function demoVisibility() {
    document.getElementById("mensagem").style.visibility = "hidden";
    var inputText = document.getElementById("mensagem").value;
    document.getElementById("showText").innerText = inputText;
    var buttonElement = document.getElementById("myButton");
    buttonElement.style.visibility = "visible";

  }
 
  function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
      x.style.display = 'none';

    } else {
      x.style.display = "none";
      demoVisibility() 
     
    }
  }
  