function dochange() {

  alert('clicked button');
}

function confirmar() {
  var message;
  var dd1 = document.getElementById("div1");

  if (confirm("Deseja realmente?")) {
    message = "Você clicou OK";
    dd1.className = "yellow";
    dd1.innerHTML = message;

  } else {
    message = "Você clicou CANCEL";
    dd1.className = "blue";
    dd1.innerHTML = message;

  };

}