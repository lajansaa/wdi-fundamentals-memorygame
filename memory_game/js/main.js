var cards = [{
              rank: 'queen',
              suit: 'hearts',
              cardImage: 'images/queen-of-hearts.png'
             },
             {
              rank: 'queen',
              suit: 'diamonds',
              cardImage: 'images/queen-of-diamonds.png'
             },
             {
              rank: 'king',
              suit: 'hearts',
              cardImage: 'images/king-of-hearts.png'
             },
             {
              rank: 'king',
              suit: 'diamonds',
              cardImage: 'images/king-of-diamonds.png'
             }];
var cardsInPlay = [];
var score = 0;

var checkForMatch = function() { 
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      score++;
      document.getElementById('score').innerHTML = "Score: " + score;
    } else {
      alert("Sorry, try again");
    }
    var resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset Game';
    resetButton.setAttribute('id', 'reset');
    resetButton.addEventListener('click', reset);
    document.getElementById('game-board').appendChild(resetButton);
  }
}
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

var reset = function() {
  document.getElementById('reset').remove();
  cardsInPlay = [];
  var cardElementArr = document.getElementsByTagName('img');
  for (var i = 0; i < cardElementArr.length; i++) {
    cardElementArr[i].setAttribute('src', 'images/back.png');
  }
}

createBoard();
