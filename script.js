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
  
  let playerIndex = 0; // начинаем с первого участника
  let visiblePlayers = 3; // количество видимых участников
  let totalPlayers = 6; // общее количество участников
  
  function displayPlayers() {
    let displayedPlayers = [];
    if (playerIndex + visiblePlayers <= players.length) {
      displayedPlayers = players.slice(playerIndex, playerIndex + visiblePlayers);
    } else {
      displayedPlayers = [...players.slice(playerIndex), ...players.slice(0, visiblePlayers - (players.length - playerIndex))];
    }
  
    let playerLine = document.getElementById("playerLine");
  
    while (playerLine.firstChild) {
      playerLine.removeChild(playerLine.firstChild);
    }
  
    displayedPlayers.forEach(player => {
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
  }
  
  function movePlayers(direction) {
    if (direction === "left") {
      playerIndex = (playerIndex - 1 + totalPlayers) % totalPlayers;
    } else if (direction === "right") {
      playerIndex = (playerIndex + 1) % totalPlayers;
    }
  
    displayPlayers();
  }
  
  document.querySelector(".main__button_left.left").addEventListener("click", () => movePlayers("left"));
  document.querySelector(".main__button_left.right").addEventListener("click", () => movePlayers("right"));
  
  displayPlayers();