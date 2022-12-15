var randomNumber1=Math.floor(6*Math.random()+1);
var randomNumber2=Math.floor(6*Math.random()+1);



var changingName1="dice"+randomNumber1+".png";
var changingName2="dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", 'images/'+changingName1);
document.querySelector(".img2").setAttribute("src", 'images/'+changingName2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML = "Draw";
}
