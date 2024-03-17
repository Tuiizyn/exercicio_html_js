const form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const primeiroNumero = document.getElementById('primeiro-numero');
    const segundoNumero = document.getElementById('segundo-numero');

    if (segundoNumero > primeiroNumero) {
        alert("Validação bem-sucedida");
        return true;
    } else {
        alert("Validação Falhou");
        return false;
    }
})

console.log(form);