var synth = window.speechSynthesis;
var voices = synth.getVoices()
console.log(voices)
document.querySelector('#start').onclick = () => {
    Say("hi it's me Endless");
    recognition.start();
}


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var listenCount = 0

function Say(str) {
    var utterThis = new SpeechSynthesisUtterance(str);
    //utterThis.voice = "Microsoft Ravi - English (India)"
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
    //recognition.start()
    console.log('jojoj')

}

document.querySelectorAll('button')[1].onclick = () => {
    recognition.start();
}

recognition.onresult = function (event) {
    var recognised_words = event.results[listenCount][0].transcript.trim()
    console.log(event);
    console.log('Confidence: ' + event.results[listenCount][0].confidence);
    console.log('transcript: ' + event.results[listenCount][0].transcript);

    listenCount += 1
    if (recognised_words.includes("hello")) {
        Say("hello");

    }
    else if (recognised_words == "hai") {
        var utterThis = new SpeechSynthesisUtterance("hii");
        synth.speak(utterThis);
    }

    else if (recognised_words.includes(" my pendding work today")) {
        var utterThis = new SpeechSynthesisUtterance("you need to complete Interact work as soon as possible");
        synth.speak(utterThis)
    }

    else if(recognised_words.includes("you are slow")){
        Say('Ashu made me so better you ask him why i am slow')
    }


}


recognition.onspeechend = function () {
    recognition.stop();
    console.log("end")
}

