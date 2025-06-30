function aMayusculas(input) {
  input.value = input.value.toUpperCase();
}

function validarFormulario() {
  const clave = document.getElementById('clave').value;

  if (clave === "" || isNaN(clave) || Number(clave) <= 0) {
    alert("La clave debe ser un número positivo.");
    return false;
  }

  return true;
}