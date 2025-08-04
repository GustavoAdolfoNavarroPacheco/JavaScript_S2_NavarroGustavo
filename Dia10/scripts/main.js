const apiBaseUrl = "https://deckofcardsapi.com/api/deck/";
let deckId = "";
let playerCards = [];
let dealerCards = [];
let playerScore = 0;
let dealerScore = 0;

const playerPointsElement = document.getElementById("playerPoints");
const dealerPointsElement = document.getElementById("dealerPoints");
const containerPlayerCards = document.getElementById("containerPlayerCards");
const containerDealerCards = document.getElementById("containerDealerCards");
const takeCardButton = document.getElementById("takeCard");
const standButton = document.getElementById("stand");
const gameMessage = document.getElementById("gameMessage");

fetch(`${apiBaseUrl}new/shuffle/?deck_count=1`)
    .then(response => response.json())
    .then(data => {
        deckId = data.deck_id;
    });

takeCardButton.addEventListener("click", () => {
    fetch(`${apiBaseUrl}${deckId}/draw/?count=1`)
        .then(response => response.json())
        .then(data => {
            const card = data.cards[0];
            playerCards.push(card);

            const img = document.createElement("img");
            img.src = card.image;
            img.className = "cardImage";
            containerPlayerCards.appendChild(img);

            calculatePlayerScore();
        });
});

standButton.addEventListener("click", () => {
    drawDealerCard();
});

function drawDealerCard() {
    fetch(`${apiBaseUrl}${deckId}/draw/?count=1`)
        .then(response => response.json())
        .then(data => {
            const card = data.cards[0];
            dealerCards.push(card);

            const img = document.createElement("img");
            img.src = card.image;
            img.className = "cardImage";
            containerDealerCards.appendChild(img);

            calculateDealerScore();
        });
}

function calculatePlayerScore() {
    playerScore = calculateScore(playerCards);
    playerPointsElement.textContent = `Player Score: ${playerScore}`;
    checkWinner();
}

function calculateDealerScore() {
    dealerScore = calculateScore(dealerCards);
    dealerPointsElement.textContent = `Dealer Score: ${dealerScore}`;
    checkWinner();
}

function calculateScore(cards) {
    let score = 0;
    let aces = 0;

    cards.forEach(card => {
        if (card.value === "ACE") {
            aces += 1;
            score += 11;
        } else if (["KING", "QUEEN", "JACK"].includes(card.value)) {
            score += 10;
        } else {
            score += parseInt(card.value);
        }
    });

    while (score > 21 && aces > 0) {
        score -= 10;
        aces -= 1;
    }

    return score;
}

function checkWinner() {
    if (playerScore > 21) {
        gameMessage.textContent = "You lose!";
        disableButtons();
    } else if (dealerScore > 21) {
        gameMessage.textContent = "You win!";
        disableButtons();
    } else if (playerScore === 21) {
        gameMessage.textContent = "Blackjack! You win!";
        disableButtons();
    } else if (dealerScore === 21) {
        gameMessage.textContent = "Dealer has Blackjack! You lose!";
        disableButtons();
    }
}

function disableButtons() {
    takeCardButton.disabled = true;
    standButton.disabled = true;
}
