
let recognition_status = false;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; // make it realtime return result 


recognition.addEventListener("result",(e)=>{


    if(e.results[0][0].transcript.length > 0 ){
        $("#listener_gif").fadeIn();
    }
    
    if(e.results[0].isFinal){
        let data = e.results[0][0].transcript.toLowerCase();
        taskController(data);
    }
});

recognition.onstart = function() { 
    if(!recognition_status){
        speak("Smart Mode Turned On!");
        $("#smartMode").text("Turn OFF");
        $("#smartMode").attr("class","btn btn-danger");
        $("#smartMode").attr("value","1");
        recognition_status = true; 
    }
}

recognition.addEventListener("end",()=>{
    $("#listener_gif").fadeOut();
    if(recognition_status){
        $("#listener_gif").fadeOut();
        recognition.start();
    }
});

if(recognition_status){
    recognition.start();
}