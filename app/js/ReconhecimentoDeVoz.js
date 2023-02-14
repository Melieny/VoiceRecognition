const elementoChute = document.getElementById('chute')

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;



const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();


recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
    VerificaValor(chute)
    
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `<div>Voce Disse</div>  <span class="box">${chute}</span> `  
}