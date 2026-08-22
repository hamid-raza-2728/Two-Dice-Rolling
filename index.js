var nume1 = Math.random();
var nume2 = Math.random();
var num1 = Math.floor(nume1 * 6) + 1;
var num2 = Math.floor(nume2 * 6) + 1;
document.querySelector(".img1").setAttribute("src","./images/dice"+num1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+num2+".png");
function Result(){
if(num1===num2) {
   document.querySelector("h1").textContent="Draw";
   }
else if(num1>num2){
    document.querySelector("h1").textContent="🚩 Player 1 Wins!"; 
     }
else{
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}            
}
console.log(num1);
console.log(num2);
console.log(Result());
