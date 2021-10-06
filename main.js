var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML=" "
    Recognition.start()
}
Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;

    speech();
}

function speech(){
    var synth = window.speechSynthesis;
    speech_data = document.getElementById("textbox").value + ", Will take selfie in 10 seconds";
    var talk= new SpeechSynthesisUtterance(speech_data);
    synth.speak(talk);

    webcam.attach(camera);


}
camera=document.getElementById("camera")
webcam.set({

    width:360,
    height:400,
    image_format:'jpeg',
    jpeg_quality:100,

});
