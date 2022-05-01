const cardArray = [
  {
    name: "cherries",
    img: "assets/cherries.jpg",
  },
  {
    name: "cherries",
    img: "assets/cherries.jpg",
  },
  {
    name: "blueberries",
    img: "assets/Blueberries.jpg",
  },
  {
    name: "blueberries",
    img: "assets/Blueberries.jpg",
  },
  {
    name: "avocado",
    img: "assets/Avocado.jpg",
  },
  {
    name: "avocado",
    img: "assets/Avocado.jpg",
  },
  {
    name: "lemon",
    img: "assets/Lemon.jpg",
  },
  {
    name: "lemon",
    img: "assets/Lemon.jpg",
  },
  {
    name: "mango",
    img: "assets/Mango.jpg",
  },
  {
    name: "mango",
    img: "assets/Mango.jpg",
  },
  {
    name: "peach",
    img: "assets/Peach.jpg",
  },
  {
    name: "peach",
    img: "assets/Peach.jpg",
  },
];
cardArray.sort(() => 0.5 - Math.random());
const cardBlank = [
  {
    name: "burns",
    img: "assets/burns.jpg",
  },
];
const cardFound = [
  {
    name: "found",
    img: "assets/yellow.jpg",
  },
];

let chosen = [];
let chosenId = [];
let won = [];
let title = document.querySelector("h1");
let attempt = 8;

const grid = document.querySelector(".grid");

function boardGame() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", cardBlank[0].img);
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    grid.append(card);
  }
} 
function youLose() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.querySelector("img");
    card.setAttribute("src", cardBlank[0].img);
    grid.append(card);
  }
  title.textContent = "Sorry, you lose 👎 restart game ✌";
}
function youWin() {
  title.textContent = "Congratulations, you win! ✌";
}
function matchCards() {
  let cards = document.querySelectorAll("img");
  const oneId = chosenId[0];
  const twoId = chosenId[1];
  if (chosen[0] === chosen[1]) {
    cards[oneId].setAttribute("src", cardFound[0].img);
    cards[twoId].setAttribute("src", cardFound[0].img);
    won.push(chosen);
    title.textContent = "🍒 You got a pair 🍒";
  } else {
    title.textContent = "Try Again";
    cards[oneId].setAttribute("src", cardBlank[0].img);
    cards[twoId].setAttribute("src", cardBlank[0].img);
    attempt--;
  }
  chosen = [];
  chosenId = [];
  if (attempt < 1) {
    youLose();
  }
  if (won.length === 6) {
    youWin();
  }
}
function flipcard() {
  let cardId = this.getAttribute("data-id");
  chosen.push(cardArray[cardId].name);
  chosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (chosen.length === 2) {
    setTimeout(matchCards, 1000);
  }
}
boardGame();
