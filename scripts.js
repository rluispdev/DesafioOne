 
function elementVisibility() {
    document.getElementById("message").style.visibility = "hidden";
    var inputText = document.getElementById("message").value;
    document.getElementById("showText").innerText = inputText;

    var buttonElement = document.getElementById("myButton");
    buttonElement.style.visibility = "visible";
    if (buttonElement.style.visibility === `visible`){
     buttonElement.style.marginTop = `781px`
    }
  }
 
  function configVisibility() {
    var displayVisibility = document.getElementById('myDIV');
    if (displayVisibility.style.display === 'none') {
      displayVisibility.style.display = 'none';

    } else {
      displayVisibility.style.display = "none";
      elementVisibility()
     
    }
  }
  