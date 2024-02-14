 
 
  
// function elementVisibility() {
//   document.getElementById("message").style.visibility = "hidden";
//   var inputText = document.getElementById("message").value;

//   var buttonElement = document.getElementById("myButton");
//   buttonElement.style.visibility = "visible";
//   if (buttonElement.style.visibility === 'visible') {
//     buttonElement.style.marginTop = '781px';
//   }

//   return inputText; 
// }

// function updateText() {
//   var inputText = document.getElementById("message").value;
//   document.getElementById("showText").innerText = inputText;
//   let encoded = window.btoa(inputText);
//   document.getElementById("showText").innerHTML = encoded;
// }

// document.addEventListener("DOMContentLoaded", function() {
//   updateText();  
// });

// function configVisibility() {
//   var displayVisibility = document.getElementById('myDIV');
//   if (displayVisibility.style.display === 'none') {
//     displayVisibility.style.display = 'none';
//   } else {
//     displayVisibility.style.display = "none";
//     elementVisibility();
//     updateText();  
//   }
// }

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

function updateText() {
  var inputText = document.getElementById("message").value;
  document.getElementById("showText").innerText = inputText;
  let encoded = window.btoa(inputText);
  showCryptoText(encoded); 
}

document.addEventListener("DOMContentLoaded", function() {
  updateText();  
});


function showCryptoText(textCrypt) {
  var brokenLine = [];
  for (var i = 0; i < textCrypt.length; i += 23) { 
    brokenLine.push(textCrypt.substr(i, 23));
  }
  var showTextElement = document.getElementById("showText");
  showTextElement.innerText = brokenLine.join('\n');
}
 

function configVisibility() {
  var displayVisibility = document.getElementById('myDIV');
  if (displayVisibility.style.display === 'none') {
    displayVisibility.style.display = 'none';
  } else {
    displayVisibility.style.display = "none";
    elementVisibility();
    updateText();  
  }
}
