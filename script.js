var dealerSum = 0; //shows dealers total once they stick or go bust
var playerSum = 0; //shows player total once they hit stick or go bust

var dealerAceCount = 0; //allows for ace count to calculate if dealer can twist or goes bust
var playerAceCount = 0; //allows for ace count to calculate if player can twist or goes bust

var dealerCardBack; //hides the dealers first card

var deck;

let canTwist = true; // player can twist while playerSum <= 21


window.onload = function(){ // builds deck when DOM has loaded
    buildDeck();
}

function buildDeck() {
    let value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suit = ['C', 'D', 'H', 'S'];
    deck = [];

    for (let i = 0; i < suit.lenght; i++) {
        for (let b = 0; b < value.lenght; b++) {
            deck.push(`${value[b]}-${suit[i]}`); //value of the card [b] combined with the value of the suit[i]
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