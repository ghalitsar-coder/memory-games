// Grab things up

const section = document.querySelector("section");
let playerLivesCount = document.querySelector("span");
const cards = document.querySelectorAll("card");
let playerLives = 6;
// Small things
playerLivesCount.textContent = playerLives;

// Generate Data

const getData = () => [
  { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 6, name: "lep zeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
  { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();

  // Loop the cards
  cardData.forEach((item) => {
    // Generate The Html
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    // Attach the info Cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    // append the item to the parent
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    // addEventListener to Cards
    card.addEventListener("click", function (e) {
      this.classList.toggle("toggleCards");
      checkCards(e);
    });
  });
};

let newArr = [];
let trueArr = [];
const checkCards = (e) => {
  const clickedCard = e.target;
  newArr.push(clickedCard);
  if (newArr.length === 2) {
    if (newArr[0].getAttribute("name") !== newArr[1].getAttribute("name")) {
      console.log("wrong");
      setTimeout(() => {
        newArr.forEach((el, i) => {
          el.classList.remove("toggleCards");
        });
        newArr = [];
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if (playerLives === 0) {
          setTimeout(() => {
            let lagi = confirm("Main lagi ?");
            if (lagi) {
              restart();
              playerLives = 6;
              playerLivesCount.textContent = playerLives;
            } else {
              const lose = document.querySelector(".lose");
              lose.textContent = "Kamu kalah kamu boodoh yahahaha";
              cards.forEach((card) => (card.style.pointerEvents = "none"));
            }
          }, 500);
        }
      }, 1000);
    } else {
      console.log("match");
      newArr.forEach((el, i) => {
        el.style.pointerEvents = "none";
        trueArr.push(el);
      });
      newArr = [];
    }
  }
  return clickedCard;
};

const restart = () => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");

  cardData.forEach((item, i) => {
    cards[i].classList.remove("toggleCards");
  });
};

cardGenerator();
