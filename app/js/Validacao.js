function VerificaValor(){
    const numero = +chute

    if(chuteinvalido(numero)){
       elementoChute.innerHTML +=  '<div>Valor Invalido</div>'
       return
    }

    if(numeroForMaiorOuMenor(numero)){
       elementoChute.innerHTML += `<div>Valor invalido:  o numero secreto precisar estar entre ${menorValor} e ${maiorValor}</div>`
       return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML =
        `
        <h2>Parabens, Voce Acertou o numero Secreto!!!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>

        <button id="reiniciar"> Jogar Novamente </button>
    `


    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += ` <div >O numero secreto e menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += ` <div >O numero secreto e maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

}



function chuteinvalido (numero){
    return Number.isNaN(numero)
}  

function numeroForMaiorOuMenor(numero) {
   return (numero > maiorValor) || (numero < menorValor)
}

recognition.addEventListener('end',(() => {
    recognition.start()
}))

document.body.addEventListener("click", function (evento) {
    if(evento.target.id == "reiniciar") {
        window.location.reload();
    }
})