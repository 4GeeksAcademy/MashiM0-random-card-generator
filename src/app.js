import "bootstrap";
import "./style.css";


import "./assets/img/favicon.ico";

function randomNumber(arr){
  return Math.floor(Math.random()*arr.length)
}

window.onload = function() {
  //write your code here
  const suits = ['♦', '♥', '♠', '♣']
  const ranks = ['A', '1', '2', '3','4', '5', '6', '7', '8', '9', 'J','Q','K']
  const rankIds = ['heart', 'spades', 'clubs', 'diamonds']

    let cardSuits = document.querySelectorAll(".suit")
    let suit = randomNumber(suits)
      for(let cardSuit of cardSuits){
        cardSuit.innerHTML = suits[suit]
      }

    if(suit in ['♦', '♥']){
      document.querySelector(".black").classList.add("red")
      document.querySelector(".black").classList.remove("black")
    }

    let cardRanks = document.querySelector(".rank")
    let rank = randomNumber(ranks)
      cardRanks.innerHTML = ranks[rank]
};
