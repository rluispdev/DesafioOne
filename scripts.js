
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


function bin2text(bin) {

  try {
    // Verificar se a entrada contém apenas 0s e 1s
    if (!/^[01]+$/.test(bin)) {
      throw new Error('Erro: A entrada deve conter apenas 0s e 1s (números binários).');
    }
    bin = bin.replace(/\s/g, ''); 
    let result = "";
    for (let i = 0; i < bin.length; i += 8) {
      let chunk = bin.slice(i, i + 8);  

      // Converter o byte em um caractere ASCII
      let asciiValue = parseInt(chunk, 2);
      
      // Verificar se o valor ASCII está dentro do intervalo válido (32 a 126 são os caracteres imprimíveis na tabela ASCII)
      if (asciiValue >= 32 && asciiValue <= 126) {
        // Adicionar o caractere ASCII válido ao resultado
        result += String.fromCharCode(asciiValue);
      } else {
        // Se o valor ASCII estiver fora do intervalo válido, lançar um erro
        throw new Error('Erro: A entrada contém caracteres que não são ASCII válidos.');
      }
    }

    if (result === "") {
      document.getElementById("errorConvert").style.visibility = "visible"; 
     return "Erro: A entrada não pôde ser convertida.";
    }

    return result;
  } catch (error) {

  // Esconder o botão copiar quando houver um erro
  document.getElementById("myButton").style.display = "none";

  // Re-focar a textarea
  document.getElementById("message").focus();

  displayErrorMessage(error.message);
  return errorMessage;
  }
}

function displayErrorMessage(errorMessage) {
  const errorMessageElement = document.getElementById("textError");
  errorMessageElement.textContent = errorMessage;
 // document.getElementById("errorConvert").style.visibility = "visible";
  document.getElementById("errorConvert").style.display = "block";
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

 