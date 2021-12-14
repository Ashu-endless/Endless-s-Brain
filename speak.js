var synth = window.speechSynthesis;
var voices  = synth.getVoices()
console.log(voices)
document.querySelector('button').onclick=()=>{
    var utterThis = new SpeechSynthesisUtterance("hi it's me Endless");
    //utterThis.voice = "Microsoft Ravi - English (India)"
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
}


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


document.querySelectorAll('button')[1].onclick=()=>{
    recognition.start();
}

recognition.onresult = function(event) {
    var color = event.results[0][0].transcript;
    //diagnostic.textContent = 'Result received: ' + color + '.';
    //bg.style.backgroundColor = color;
    console.log('Confidence: ' + event.results[0][0].confidence);
    console.log('transcript: ' + event.results[0][0].transcript);
    if(event.results[0][0].transcript == "hello"){
    var utterThis = new SpeechSynthesisUtterance("hello");
    synth.speak(utterThis);}
    else if(event.results[0][0].transcript == "hello"){
        var utterThis = new SpeechSynthesisUtterance("hii");
    synth.speak(utterThis);}
    }
  

recognition.onspeechend = function() {
    recognition.stop();
    console.log("end")
  }
  
