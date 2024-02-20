
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

//Converte Srting -> Bin.
const stringToBinary = (str) => {
  let binary = "";
  for (let i = 0; i < str.length; i++) {
      const charBinary = str[i].charCodeAt(0).toString(2);  
      binary += charBinary.padStart(8, '0');
      
  }
  return binary;
};

//Converte Bin -> String.
function bin2text(bin) {
  bin = bin.replace(/\s/g, ''); // Remover todos os espaços em branco
  let result = "";
  for (let i = 0; i < bin.length; i += 8) {
    let chunk = bin.slice(i, i + 8);  
    result += String.fromCharCode(parseInt(chunk, 2));  
  }
  return result;
}

//Visibilidade.
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
    document.getElementById("zerumGray").parentElement.style.visibility = "visible";
    document.getElementById("btn1").parentElement.style.visibility = "hidden";
    document.getElementById("logo1").parentElement.style.visibility = "hidden";
  }
}

//Desabilitar botão.
function checkTextarea() {
  var textarea = document.getElementById("message");
  var encryptButton = document.getElementById("btn1");
  var decryptButton = document.querySelector(".buttonDecrypt");

  if (textarea.value.trim().length > 0) {
    encryptButton.disabled = false;
    decryptButton.disabled = false;
  } else {
    encryptButton.disabled = true;
    decryptButton.disabled = true;
  }
}


function goToHomePage() {
  window.location.reload(); // Recarregar a página
}


function buttonCopy() {
  var copyText = document.getElementById("showText");
  navigator.clipboard.writeText(copyText.value)
  .then(function() {
    
    copyText.value = ""; // Limpar o campo após a cópia
    document.getElementById("copiedImage").style.display = "block";  
    document.getElementById("myButton").style.display = "none";
    document.getElementById("divIconContainer").style.display = "inline";

  }).catch(function(error) {
    // Se houver algum erro na cópia
    console.error("Erro ao copiar texto: ", error);
  });

}

document.getElementById("divIconContainer").addEventListener("click", goToHomePage);
