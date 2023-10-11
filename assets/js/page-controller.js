
$("#photo-editor-panel").hide();

function updateNav(targetid){
    $("#custom-nav .active").removeClass("active");
    $(`#${targetid}`).addClass("active");
}

function openPhotoEditor(){
    $("#home-panel").slideUp(500);
    $("#photo-editor-panel").slideDown();
    $("#about-panel").slideUp(300);
    updateNav("photo-editor-nav");
}

function openVideoEditor(){

}

function openHomePanel(){
    $("#photo-editor-panel").slideUp(500);
    $("#home-panel").slideDown();
    $("#about-panel").slideUp(300);
    updateNav("home-nav");
}

function openAboutPanel(){
    $("#photo-editor-panel").slideUp(500);
    $("#home-panel").slideUp();
    $("#about-panel").slideDown();
    updateNav("about-nav");
}

$(document).ready(function(){
    $(document).on("click","#open-photo-editor",function(){
        openPhotoEditor();
    });
    $(document).on("click","#open-home-panel", function(){
        openHomePanel();
    });
    $(document).on("click","#about-nav",function(){
        openAboutPanel();
    });
    updateNav("home-nav");
});

$(document).on("click","#smartMode",function(){
    if($("#smartMode").attr("value") == 1){
        recognition_status = false;
        speak("Smart Mode Turned OFF!");
        $("#smartMode").attr("class","btn btn-primary");
        $("#smartMode").text("Turn ON");
        $("#smartMode").attr("value","0");
        recognition.stop();
        $("#listener_gif").fadeOut();
    }else{
        $("#smartMode").attr("value","1");
        recognition.start();
    }
});