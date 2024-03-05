 
//Tornar mensagens cript/descrip visíveis.
function elementVisibility() {
  document.getElementById("message").style.visibility = "hidden";
  var inputText = document.getElementById("message").value;
  var buttonElement = document.getElementById("myButton");
  buttonElement.style.visibility = "visible";
  // Obtenção do tamanho da tela
  const windowWidth = window.innerWidth;
  // Lógica condicional para o tamanho da tela 
  if (windowWidth <= 1400) { // Por exemplo, em telas menores que 1400px
    buttonElement.style.marginTop = '300px';
  } else {
    buttonElement.style.marginTop = '781px';
  }

  return inputText; 
}

//Configurar a visibilidade do texto criptografado.
function showCryptoText(textCrypt) {
  var showTextElement = document.getElementById("showText");
  showTextElement.style.visibility = "visible";
  // Obtenção do tamanho da tela
  const windowWidth = window.innerWidth;
  // Lógica condicional para o tamanho da tela 
  if (windowWidth <= 1400) { // Por exemplo, em telas menores que 1400px
    showTextElement.style.height = '300px'; // Valor de exemplo
  } else {
    showTextElement.style.height = '781px';
  }
  showTextElement.innerText = textCrypt;
}


//Preparar o texto para receber criptografia ou descriptografia.
function processText(cryptoFunction) {
  var inputText = document.getElementById("message").value;
  document.getElementById("showText").innerText = inputText;
  let cryptoResult = cryptoFunction(inputText);
  showCryptoText(cryptoResult);
  onMessageConverted()
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
      throw new Error('Erro: A entrada deve conter apenas 0s e 1s (números binários válidos).');
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

  document.getElementById("myButton").style.display = "none";
  document.getElementById("message").focus();
  displayErrorMessage(error.message);
  showBgCodeMessage();
  document.getElementById("btn1").parentElement.style.visibility = "hidden";
  document.getElementById("zerumGray").parentElement.style.visibility = "visible";
  return errorMessage;
  }
}

//Exbir uma mensagem de erro ao usuário.
function displayErrorMessage(errorMessage) {
  const errorMessageElement = document.getElementById("textError");
  errorMessageElement.textContent = errorMessage;
  document.getElementById("errorConvert").style.display = "block";
  document.getElementById("returnIcon").style.display = "inline";
 
}

//Visibilidade.
function toggleVisibility(action, title) {
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
    document.getElementById("logo1").parentElement.style.visibility = "visible";
  }
  document.getElementById('title').innerText = title;
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

var textarea = document.getElementById("message");
textarea.addEventListener('input', checkTextarea);

function checkTextarea() {
  var textarea = document.getElementById("message");
  var encryptButton = document.getElementById("btn1");
  var decryptButton = document.querySelector(".buttonDecrypt");

  // Verifica o conteúdo da textarea:
  var hasContent = textarea.value.trim().length > 0;

  // Ativa/desativa os botões com base no conteúdo
  encryptButton.disabled = !hasContent; 
  decryptButton.disabled = !hasContent; 
}

function goToHomePage() {
  window.location.reload(); 
}

function buttonCopy() {
  var copyText = document.getElementById("showText");
  var titleElement = document.getElementById('title');
  navigator.clipboard.writeText(copyText.value)
  .then(function() {
    copyText.value = "";
    titleElement.innerText = "";
    document.getElementById("copiedImage").style.display = "block";  
    document.getElementById("myButton").style.display = "none";
    document.getElementById("divIconContainer").style.display = "inline";

  }).catch(function(error) {
    console.error("Erro ao copiar texto: ", error);
  });
}
document.getElementById("divIconContainer").addEventListener("click", goToHomePage);
document.getElementById("returnIcon").addEventListener("click", goToHomePage);


function showBgCodeMessage() {
  const bgCodeMessage = document.querySelector(".bgCodedMessage");
  bgCodeMessage.classList.remove("hidden");
}

// Exemplo de evento que chama a função após a conversão
function onMessageConverted() {
  showBgCodeMessage();
}