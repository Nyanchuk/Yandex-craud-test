let players = [
    { id: 1, name: "Хозе-Рауль Капабланка", rank: "Чемпион мира по шахматам" },
    { id: 2, name: "Эммануил Ласкер", rank: "Чемпион мира по шахматам" },
    { id: 3, name: "Александр Алехин", rank: "Чемпион мира по шахматам" },
    { id: 4, name: "Арон Нимцович", rank: "Чемпион мира по шахматам" },
    { id: 5, name: "Рихард Рети", rank: "Чемпион мира по шахматам" },
    { id: 6, name: "Остап Бендер", rank: "Гроссмейстер" },
  ];
  
  let playerLine = document.getElementById("playerLine");
  
  players.forEach(player => {
    let playerDiv = document.createElement("div");
    playerDiv.className = "main__player";
  
    let playerImg = document.createElement("img");
    playerImg.src = "img/player.svg";
    playerImg.className = "main__player_photo";
    playerDiv.appendChild(playerImg);
  
    let playerName = document.createElement("span");
    playerName.className = "main__player_name";
    playerName.textContent = player.name;
    playerDiv.appendChild(playerName);
  
    let playerRank = document.createElement("span");
    playerRank.className = "main__player_rank";
    playerRank.textContent = player.rank;
    playerDiv.appendChild(playerRank);
  
    let playerButton = document.createElement("button");
    playerButton.className = "main__player_button";
    playerButton.textContent = "Подробнее";
    playerDiv.appendChild(playerButton);
    playerLine.appendChild(playerDiv);
  });


  let currentIndex = 0;
  const playersPerPage = 3;
  const leftButton = document.querySelector(".main__button_left.left");
  const rightButton = document.querySelector(".main__button_left.right");
  
  leftButton.addEventListener("click", () => {
      if (currentIndex > 0) {
          currentIndex--;
          rightButton.disabled = false;
          if (currentIndex === 0) {
              leftButton.disabled = true;
          }
          showPlayers();
      }
  });
  
  rightButton.addEventListener("click", () => {
      if (currentIndex + playersPerPage < players.length) {
          currentIndex++;
          leftButton.disabled = false;
          if (currentIndex + playersPerPage === players.length) {
              rightButton.disabled = true;
          }
          showPlayers();
      }
  });

  function updateCounter() {
    const currentPageStart = currentIndex + 3;
    document.querySelector("span#counter").textContent = currentPageStart  + "/" + players.length;
}
  
  function showPlayers() {
      playerLine.innerHTML = "";
      for (let i = currentIndex; i < currentIndex + playersPerPage; i++) {
          if (i < players.length) {
              let playerDiv = document.createElement("div");
              playerDiv.className = "main__player";
  
              let playerImg = document.createElement("img");
              playerImg.src = "img/player.svg";
              playerImg.className = "main__player_photo";
              playerDiv.appendChild(playerImg);
  
              let playerName = document.createElement("span");
              playerName.className = "main__player_name";
              playerName.textContent = players[i].name;
              playerDiv.appendChild(playerName);
  
              let playerRank = document.createElement("span");
              playerRank.className = "main__player_rank";
              playerRank.textContent = players[i].rank;
              playerDiv.appendChild(playerRank);
  
              let playerButton = document.createElement("button");
              playerButton.className = "main__player_button";
              playerButton.textContent = "Подробнее";
              playerDiv.appendChild(playerButton);
              playerLine.appendChild(playerDiv);
          }
      }
      updateCounter();
  }
  
  showPlayers();
  updateCounter();
