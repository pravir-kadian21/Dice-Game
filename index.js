var r1 = Math.random();
var r2 = Math.random();

r1*=6;
r2*=6;
r1 = Math.floor(r1)+1;
r2 = Math.floor(r2)+1;


document.querySelector(".img1").setAttribute("src","images/dice"+r1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+r2+".png");

var title = document.querySelector("h1");

if(r1>r2){
    title.textContent = "Player 1 Wins.... Refresh to play more";
}
else if(r1<r2){
    title.textContent = "Player 2 Wins.... Refresh to play more";
}
else{
    title.textContent = "Draw.... Refresh to play more";
}