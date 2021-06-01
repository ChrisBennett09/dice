var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var imageSource1 = 'images/dice' + randomNumber1 + '.png'; //images/dice6.png
var imageSource2 = 'images/dice' + randomNumber2 + '.png'; //images/dice6.png

var die1 = document.querySelectorAll('img')[0];
die1.setAttribute('src', imageSource1);

var die2 = document.querySelectorAll('img')[1];
die2.setAttribute('src', imageSource2);

var res = document.querySelector('.result');
if (randomNumber1 > randomNumber2) {
  res.innerHTML = '👍🏼 Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
  res.innerHTML = 'Player 2 Wins! 👍🏼';
} else {
  res.innerHTML = 'Draw!';
}
