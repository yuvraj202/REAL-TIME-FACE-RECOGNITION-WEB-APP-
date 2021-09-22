function setup() {
    canvas = createCanvas(800, 340);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Bb8Jf7KvR/model.json",modelloaded);

}

function modelloaded() {
    console.log("model is loaded");
}

function draw() {
   
 image(video, 0, 0, 800, 400);
    classifier.classify(video, gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);

        document.getElementById("objectname").innerHTML = results[0].label;
        document.getElementById("objectaccuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}
