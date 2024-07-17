let numeroAleatorio = 
Math.floor(Math.random() * 100) + 1;

let tentativas = 0;


function checarAdvinha() {
    const advinhaInput = document.getElementById('advinha_input');
    const resultado = document.getElementById('resposta');
    const advinha = parseInt(advinhaInput.value);
    tentativas++;

    if (advinha === numeroAleatorio) {
        resultado.textContent = `Parabens!!Você acertou o número  ${numeroAleatorio}  em ${tentativas} tentativas`
        acertou.style.display = 'block'

        baixo.style.display = 'none'
        alto.style.display = 'none'

    } else if (advinha > numeroAleatorio) {
        resultado.textContent = ' Chutou Alto!! Tente um número menor '
        alto.style.display = 'block'
        baixo.style.display = 'none'
        acertou.style.display = 'none'

    }


    else {
        resultado.textContent = ' Chutou baixo! Tente um número maior'
        baixo.style.display = 'block'
        acertou.style.display = 'none'
        alto.style.display = 'none'

    }

    advinhaInput.value = '';
   
    advinhaInput.focus()
}
