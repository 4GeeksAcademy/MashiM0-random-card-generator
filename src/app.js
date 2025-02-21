import "bootstrap";
import "./style.css";


import "./assets/img/favicon.ico";

const suits = ['♦', '♥', '♠', '♣']
const ranks = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
const cardSuits = document.querySelectorAll(".suit")
const cardRanks = document.querySelector(".rank")
const genButton = document.querySelector(".reset-button")
const card = document.querySelector(".card")

console.log(genButton)
genButton.addEventListener("click", genNewCard)

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length)
}

function genNewCard() {
  let suit = randomNumber(suits)
  for (let cardSuit of cardSuits) {
    cardSuit.innerHTML = suits[suit]
  }

  if (suit in ['♦', '♥']) {
    card.classList.add("red")
    card.classList.remove("black")
  } else {
    card.classList.add("black")
    card.classList.remove("red")
  }

  let rank = randomNumber(ranks)
  cardRanks.innerHTML = ranks[rank]
  console.log(rank, suit)
}

window.onload = function () {
  genNewCard()
};

window.setInterval(genNewCard, 10000)