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
  const supportButton = document.querySelector("header__button_one");
  leftButton.disabled = true;

function startAutoScroll() {
    let scrollingForward = true;

    intervalId = setInterval(() => {
        if (scrollingForward) {
            rightButton.click();
        } else {
            leftButton.click();
        }

        if (currentIndex + playersPerPage >= players.length) {
            scrollingForward = false;
        } else if (currentIndex <= 0) {
            scrollingForward = true; 
        }
    }, 4000);
}
  
  leftButton.addEventListener("click", () => {
      if (currentIndex > 0) {
          currentIndex--;
          rightButton.disabled = false;
          if (currentIndex === 0) {
              leftButton.disabled = true;
          }
            const start = currentIndex * (394 + 20); 
            playerLine.style.transform = `translateX(-${start}px)`; 
            updateCounter()
      }
  });
  
  rightButton.addEventListener("click", () => {
      if (currentIndex + playersPerPage < players.length) {
          currentIndex++;
          leftButton.disabled = false;
          if (currentIndex + playersPerPage === players.length) {
              rightButton.disabled = true;
          }
          const start = currentIndex * (394 + 20); 
          playerLine.style.transform = `translateX(-${start}px)`; 
          updateCounter()
      }
  });

function updateCounter() {
    const currentPageStart = currentIndex + 3;
    document.querySelector("span#counter").textContent = currentPageStart  + "/" + players.length;
}
updateCounter();
startAutoScroll();

document.addEventListener('DOMContentLoaded', function() {
    const supportButton = document.querySelector('.header__button_one');
    const targetBlock = document.querySelector('.main__session_text');
  
    supportButton.addEventListener('click', function() {
      targetBlock.scrollIntoView({ behavior: 'smooth' });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const supportButtonLevel = document.querySelector('.header__button_two');
    const targetBlockLevels = document.getElementById('levels');
  
    supportButtonLevel.addEventListener('click', function() {
        targetBlockLevels.scrollIntoView({ behavior: 'smooth' });
    });
});

function preloadImages(imageUrls) {
    imageUrls.forEach(function(url) {
        const img = new Image();
        img.src = url;
    });
}

const images = ['img/level_1.svg', 'img/level_2.svg', 'img/level_3.svg', 'img/level_4.svg', 'img/level_5.svg'];
preloadImages(images);

const mobileLevels = document.querySelector('.mobile__levels');
const prevButton = document.querySelector('.lev');
const nextButton = document.querySelector('.rig');
prevButton.disabled = true;


let currentImageIndex = 0;

function updateImage() {
    mobileLevels.style.backgroundImage = `url(${images[currentImageIndex]})`;
    const checkPoints = document.querySelectorAll('.button__check_point');
    checkPoints.forEach((point, index) => {
        if (index === currentImageIndex) {
            point.classList.add('active');
        } else {
            point.classList.remove('active');
        }
    });
    if (currentImageIndex === images.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
    if (currentImageIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
}

prevButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    mobileLevels.classList.add('fade-out');
    setTimeout(function() {
        updateImage();
        mobileLevels.classList.remove('fade-out'); 
    }, 500);
});

nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    mobileLevels.classList.add('fade-out');
    setTimeout(function() {
        updateImage(); 
        mobileLevels.classList.remove('fade-out');
    }, 500);
});

updateImage();
