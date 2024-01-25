video="";
Status="";

function preload(){
    video=createVideo();
    video.hide();
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";

}

function modelLoaded(){
    console.log("modelLoaded");
    Status=true;
    video.loop();
    video.speed(1.2);
    video.volume(0);

}

function draw(){
    image(video,0,0,480,380);

}