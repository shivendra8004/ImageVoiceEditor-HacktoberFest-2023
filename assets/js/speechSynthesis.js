let tts = window.speechSynthesis;

function speak(text){
    let speak = new SpeechSynthesisUtterance(text);
    let voices = tts.getVoices();
    speak.voice = voices[4];
    tts.speak(speak);
}