var dealerSum = 0; // total score when dealer busts or sticks
var playerSum = 0; //total score when player busts or sticks

var dealerAceCount = 0; //counts dealers aces to check if 1 or 11
var playerAceCount = 0; //counts players aces to check if 1 or 11

var dealerCardBack; //dealers card face down
var deck; // deck from where cards are drawn

var canTwist = true; // player can twist while playerSum <= 21


window.onload = function () {
    buildDeck(); //builds fresh deck of cards when DOM has loaded
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = ["C", "D", "H", "S"];
    deck =[];



for (let i = 0; i < suits.length; i++) {
    for (let b =0; b < values.lenght; j++){
deck.push(values[j] + '-' + suits[i]);
        }
    }
console.log(deck);
}