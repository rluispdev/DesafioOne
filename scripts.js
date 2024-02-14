 
 
  
function elementVisibility() {
  document.getElementById("message").style.visibility = "hidden";
  var inputText = document.getElementById("message").value;

  var buttonElement = document.getElementById("myButton");
  buttonElement.style.visibility = "visible";
  if (buttonElement.style.visibility === 'visible') {
    buttonElement.style.marginTop = '781px';
  }

  return inputText; // Retorna o texto para ser usado fora da função
}

function updateText() {
  var inputText = document.getElementById("message").value;
  document.getElementById("showText").innerText = inputText;
  let encoded = window.btoa(inputText);
  document.getElementById("showText").innerHTML = encoded;
}

document.addEventListener("DOMContentLoaded", function() {
  updateText(); // Chama updateText para atualizar a codificação inicial
});

function configVisibility() {
  var displayVisibility = document.getElementById('myDIV');
  if (displayVisibility.style.display === 'none') {
    displayVisibility.style.display = 'none';
  } else {
    displayVisibility.style.display = "none";
    elementVisibility();
    updateText(); // Atualiza a codificação quando a visibilidade é alterada
  }
}

 