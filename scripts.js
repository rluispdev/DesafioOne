
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
  showTextElement.style.visibility = "visible";
  if (showTextElement.style.visibility === 'visible') {
    showTextElement.style.height = '781px';
  }
  showTextElement.innerText = textCrypt;
}

document.addEventListener("DOMContentLoaded", function() {
  encodedText();  
});

function processText(cryptoFunction) {
  var inputText = document.getElementById("message").value;
  document.getElementById("showText").innerText = inputText;
  let cryptoResult = cryptoFunction(inputText);
  showCryptoText(cryptoResult);
}

//Srting -> Bin
const stringToBinary = (str) => {
  let binary = "";
  for (let i = 0; i < str.length; i++) {
      const charBinary = str[i].charCodeAt(0).toString(2); // Adicione 0 como parâmetro
      binary += charBinary.padStart(8, '0');
  }
  return binary;
};

//Bin -> String
function bin2text(bin) {
  bin = bin.split(""); // Remova o espaço aqui
  let result = "";
  for (let i = 0; i < bin.length; i += 8) {
    let chunk = bin.slice(i, i + 8).join(""); // Pegue cada pedaço de 8 dígitos binários
    result += String.fromCharCode(parseInt(chunk, 2)); // Converta para caractere
  }
  return result;
};

//Func MasterControl
function toggleVisibility(action) {
  var displayVisibility = document.getElementById('myDIV');
  if (displayVisibility.style.display === 'none' || action === 'hide') {
    displayVisibility.style.display = 'none';
  } else {
    displayVisibility.style.display = 'none';
    elementVisibility();
    if (action === 'encode') {
      processText(stringToBinary)
    } else if (action === 'decode') {
      processText(bin2text)
    }
  }
}


//ButtonCopy
function buttonCopy(){
var copryText = document.getElementById("showText")
copryText.ariaSelected
navigator.clipboard.writeText(copryText.value)

}

