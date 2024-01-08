let dealerSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let dealerCardBack;
let playerCardBack;

let canTwist = true;
// player can twist while playerSum <= 21



document.addEventListener('DOMContentLoaded', function buildDeck() {
    let value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suit = ['C', 'D', 'H', 'S'];

    for (let i = 0; i < suits.lenght; i++) {
        for (let b = 0; b < values.lenght; b++) {
            deck.push(`${value[b]}-${suit[i]}`);
        }
    }
});


function shuffleDeck() {

}

function dealCards() {

}

function startGame() {

}