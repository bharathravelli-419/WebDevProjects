

var randomNumber1 = Math.floor(Math.random()*6) +1;

var randomNumber2 = Math.floor(Math.random()*6) +1;

console.log(randomNumber1,randomNumber2)
var res ='';
if(randomNumber1>randomNumber2)
res ="Player 1 Wins the game";
else if(randomNumber1<randomNumber2)
res ='Player 2 Wins the game';
else 
res = 'Match is Drawn Between the Players'

console.log(res);
document.querySelector(".result h2").innerHTML=res;
 
var str1 = 'assets\\images\\dice' + randomNumber1 + '.png';

var str2 = 'assets\\images\\dice' + randomNumber2 + '.png';

document.querySelector(".p1").setAttribute("src",str1);

document.querySelector(".p2").setAttribute("src",str2);