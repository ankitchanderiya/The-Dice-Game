var randomnNumber1 = Math.random();
randomnNumber1 = Math.floor(randomnNumber1*6)+1;

var image1 = "images/" + "dice" + randomnNumber1 + ".png";

document.querySelector(".img1").setAttribute('src' , image1);

var randomnNumber2 = Math.random();
randomnNumber2 = Math.floor(randomnNumber2*6)+1;

var image2 = "images/" + "dice" + randomnNumber2 + ".png";

document.querySelector(".img2").setAttribute('src' , image2);

if(randomnNumber1 > randomnNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomnNumber1 < randomnNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}