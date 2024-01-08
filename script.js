let dealerSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let dealerCardBack;
let playerCardBack;

let canTwist = true;
// player can twist while playerSum <= 21

window.onload = function(){
    buildDeck();
}

function buildDeck() {
    let value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suit = ['C', 'D', 'H', 'S'];
    deck = [];

    for (let i = 0; i < suit.lenght; i++) {
        for (let b = 0; b < value.lenght; b++) {
            deck.push(`${value[b]}-${suit[i]}`);
        }
    }
    console.log(deck)
}




function shuffleDeck() {

}

function dealCards() {

}

function startGame() {

}