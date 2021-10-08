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
    console.log(content);
    if(content == "take my selfie"){
        speech();
        console.log("taking selfie")
    }
    

    
}

function speech(){
    var synth = window.speechSynthesis;
    speech_data = "Will take selfie in 10 seconds";
    var talk= new SpeechSynthesisUtterance(speech_data);
    synth.speak(talk);

    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    }, 10000);
    
}
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("display").innerHTML='<img id="my_selfie" src="'+data_uri+'" />';
    });
    
}

camera=document.getElementById("camera")
Webcam.set({

    width:360,
    height:400,
    image_format:'jpeg',
    jpeg_quality:100,

});
function save(){
    link=document.getElementById("link");
    image=document.getElementById("my_selfie").src;
    link.href = image;
    link.click();
}