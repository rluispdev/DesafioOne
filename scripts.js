
function elementVisibility() {
  document.getElementById("message").style.visibility = "hidden";
  var inputText = document.getElementById("message").value;

  var buttonElement = document.getElementById("myButton");
  buttonElement.style.visibility = "visible";
  if (buttonElement.style.visibility === 'visible') {
    buttonElement.style.marginTop = '781px';
  }

  return inputText; 
}

function showCryptoText(textCrypt) {
  var showTextElement = document.getElementById("showText");
  showTextElement.innerText = textCrypt;
}
 
document.addEventListener("DOMContentLoaded", function() {
  encodedText();  
});

function toggleVisibility(action) {
  var displayVisibility = document.getElementById('myDIV');
  if (displayVisibility.style.display === 'none' || action === 'hide') {
    displayVisibility.style.display = 'none';
  } else {
    displayVisibility.style.display = 'none';
    elementVisibility();
    if (action === 'encode') {
      processText(window.btoa);
   
    } else if (action === 'decode') {
      processText(window.atob);
    }
  }
}

function processText(cryptoFunction) {
  var inputText = document.getElementById("message").value;
  document.getElementById("showText").innerText = inputText;
  let cryptoResult = cryptoFunction(inputText);
  showCryptoText(cryptoResult);
  
}

 


 