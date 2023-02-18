
 function start_classification()
 {
 navigator.mediaDevices.getUserMedia({ audio: true});
 classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VMoFgTex2/model.json",modelReady);
 }
 function modelReady(){
 classifier.classify(gotresult);
 
 }
 function gotresult(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("voices").innerHTML="i can hear---"+results[0].label; 
document.getElementById("accuracy").innerHTML="accuracy---"+(results[0].confidence*100).toFixed(2)+"%"; 
i1=document.getElementById("d1");

if(results[0].label=="dog"){
i1.src="dog.jpg";

}
else if(results[0].label=="horse"){
    i1.src="horse.jpg";
    }
else{
     i1.src="ear.png";
   
 }
}

}