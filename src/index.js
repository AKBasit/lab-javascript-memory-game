const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards()

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Selecting the element to update

  let pairsClicked = document.getElementById("pairs-clicked")
  let pairsGuessed = document.getElementById("pairs-guessed")

  let cardCounter = 0

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList("click", () => {
        memoryGame.pickedCards.push(card)
        cardCounter++
        if (cardCounter === 2) {
          
        }
      })
    })
  })


//   // Bind the click event of each element to a function

// document.querySelectorAll(".card").forEach((card) => {
//   card.addEventListener("click", () => {
//     card.classList.toggle("turned", true)
//     memoryGame.pickedCards
//   })
// })


//   document.querySelectorAll('.card').forEach((card) => {
//     card.addEventListener('click', () => {
//       card.classList.toggle("turned", true)
//       memoryGame.pickedCards.push(card)
      
//       // card counter++
//       if(memoryGame.pickedCards.length === 2) {
//         let card1 = memoryGame.pickedCards[0].getAttribute
//       }
//       // TODO: write some code here
//       console.log(`Card clicked: ${card}`);
//     });
//   });
// });
