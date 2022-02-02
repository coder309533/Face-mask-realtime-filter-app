nosex=0
nosey=0 

function preload() {
mask=loadImage("mask.png");

}


function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses ); 
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
    
}

function gotPoses(results){
    if(results.lenghth > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }

    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mask , nosex-43, nosey-35, 85,85 )
}

function takeSnapshot() {
    save('myFilterImage.png');
}

