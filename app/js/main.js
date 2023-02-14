const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor)
}


console.log(`Numero secreto ${numeroSecreto}`)


const elementoDeMenorValor = document.getElementById('menor-valor')
elementoDeMenorValor.innerHTML = menorValor;

const elementoDeMaiorValor = document.getElementById('maior-valor')
elementoDeMaiorValor.innerHTML = maiorValor;