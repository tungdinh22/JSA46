const cards = [
    { name: "cat", img: "https://via.placeholder.com/100?text=Cat" },
    { name: "dog", img: "https://via.placeholder.com/100?text=Dog" },
    { name: "fish", img: "https://via.placeholder.com/100?text=Fish" },
    { name: "bird", img: "https://via.placeholder.com/100?text=Bird" },
    { name: "cat", img: "https://via.placeholder.com/100?text=Cat" },
    { name: "dog", img: "https://via.placeholder.com/100?text=Dog" },
    { name: "fish", img: "https://via.placeholder.com/100?text=Fish" },
    { name: "bird", img: "https://via.placeholder.com/100?text=Bird" }
  ];

  cards.sort(()=>Math.random()- 0.5);

  let firstCard = null;
  let secondCard = null;
  let score=0;

  const grid = document.getElementById("grid");
  const scoreDisplay = document.getElementById("score");

  function displayCards() {
    cards.forEach((card,index)=>{
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.name =card.name;
    })
  }
  cardDiv.addEventListener('click', flipCard);
    
  grid.appendChild(cardDiv);
;

// Lật thẻ khi click
function flipCard() {
  const card = this;
  const cardId = card.getAttribute('data-id');
  
  // Nếu thẻ đã được lật rồi thì không làm gì
  if (flippedCards.length === 2 || flippedCards.includes(card)) return;

  card.classList.add('flipped');
  card.innerHTML = `<img src="${cards[cardId].image}" alt="${cards[cardId].name}">`;

  flippedCards.push(card);
  
  // Kiểm tra hai thẻ có giống nhau không
  if (flippedCards.length === 2) {
      setTimeout(() => checkMatch(), 500);


// Kiểm tra 2 thẻ có giống nhau không
function checkMatch() {
  const [firstCard, secondCard] = flippedCards;
  const firstCardId = firstCard.getAttribute('data-id');
  const secondCardId = secondCard.getAttribute('data-id');

  if (cards[firstCardId].name === cards[secondCardId].name) {
      matchedCards.push(cards[firstCardId].name);
      score += 10;
      document.getElementById('score').textContent = score;
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
  } else {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      firstCard.innerHTML = '';
      secondCard.innerHTML = '';
  }

  flippedCards = [];
}