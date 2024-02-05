function demoVisibility() {
    document.getElementById("mensagem").style.visibility = "hidden";
    var inputText = document.getElementById("mensagem").value;

    if(inputText.style.dispaly === "none"){
       document.getElementById("showText").innerText = inputText;
    }

  }


  