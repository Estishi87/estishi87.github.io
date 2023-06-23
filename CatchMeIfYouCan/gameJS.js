document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let colors = ["one", "two", "three", "zero"];
  let i = 0;

  //layout of letters and what is in the squares
  const layout = [
    1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
    2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
    3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
    1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
    2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
    3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
    1, 2, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
    3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
    1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
    2, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 2, 3, 1, 0, 1, 2, 3, 0, 3, 2, 1, 0, 1, 0, 3,
    0, 0, 0, 0, 2, 3, 1, 2, 3, 0, 3, 2, 1, 0, 0, 0, 0, 1, 0, 2, 3, 1, 0, 0, 0,
    0, 1, 0, 1, 0, 1, 3, 2, 0, 1, 0, 2, 0, 0, 0, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2,
    0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 3, 0, 0, 1, 0, 0, 0, 2, 0,
    2, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0,
    0, 0, 2, 3, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0,
    1, 3, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 3, 1, 3, 0, 0, 2, 0, 0, 2, 0, 0, 0, 3,
    2, 1, 0, 0, 0, 0, 3, 0, 3, 0, 2, 0, 2, 3, 1, 0, 0, 0, 0, 3, 0, 3, 1, 2, 0,
    0, 0, 0, 0, 1, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 3, 1, 3,
    0, 3, 2, 1, 3, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 3, 0, 0, 0,
    1, 0, 2, 0, 0, 0, 0, 2, 0, 1, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0,
    0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 2, 0, 1, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0,
    2, 0, 2, 0, 3, 2, 0, 0, 0, 0, 1, 2, 3, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 2, 3,
    0, 2, 0, 3, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 1, 2, 3, 0, 0, 0, 0, 2, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 3, 1, 0, 2, 3, 1, 0, 0, 0, 0, 1, 2, 3, 0, 1,
    0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
    1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
    2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
    3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
    1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
    2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
    3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
    2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
    3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
    1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
  ];

  const squares = [];

  //   // legend:
  //   // 0= dots
  //   // 1= wall
  //   // 2= gosts
  //   // 3= power pellet
  //   // 4= empty

  //draw the letters and render it
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("zero");
      } else if (layout[i] === 1) {
        squares[i].classList.add("one");
      } else if (layout[i] === 2) {
        squares[i].classList.add("two");
      } else if (layout[i] === 3) {
        squares[i].classList.add("three");
      }
    }
  }

  createBoard();

  function changeNum() {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].classList == "one") {
        squares[i].classList = "two";
      } else if (squares[i].classList == "two") {
        squares[i].classList = "three";
      } else if (squares[i].classList == "three") {
        squares[i].classList = "one";
      }
    }
    grid.style.backgroundColor = layout[i];
    i = (i + 1) % layout.length;
  }
  setInterval(changeNum, 500);
});

//-----------------------------------PART 2--------------------------------------------
//****************************************************************************************************** */
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// loadRoot("https://i.imgur.com/");
// loadSprite("wall"), "HnXu35m.jpg";

document.addEventListener("DOMContentLoaded", () => {
  const grid1 = document.querySelector(".grid1");
  const scoreDisplay = document.getElementById("score");
  const width = 14; //28 X 28 = 784 squares
  let score = 0;

  //layout of grid and what is in the squares
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 0, 1, 0, 4, 4, 4,
    4, 4, 1, 1, 4, 4, 4, 4, 4, 1, 1, 4, 2, 4, 1, 4, 1, 1, 3, 4, 4, 4, 4, 4, 1,
    3, 4, 4, 1, 4, 1, 1, 0, 4, 4, 4, 4, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 1, 2, 1, 1, 3, 2, 4, 4, 4, 4, 1, 4, 4, 0, 1, 3, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  const squares = [];

  // legend:
  // 0= dots
  // 1= wall
  // 2= gosts
  // 3= power pellet
  // 4= empty

  //draw the grid and render it
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid1.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
        squares[i].colors = "https://imgur.com/HnXu35m";
        // document.querySelector("#wall").classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
    }
  }
  createBoard();

  //add text
  function displayStatusText(context) {
    context.textAlign = "left";
    context.font = "40px Helvetica";
    context.fillStyle = "black";
    context.fillText("score: " + score, 20, 50);
    context.fillStyle = "white";
    context.fillText("score:" + score, 22, 52);
    if (checkForGameOver) {
      context.textAlign = "center";
      context.fillStyle = "black";
      context.fillText(
        "Game Over! Press Enter or swipe down to restart",
        canvas.width / 2,
        200
      );
      context.fillStyle = "white";
      context.fillText(
        "Game Over! Press Enter or swipe down to restart",
        canvas.width / 2 + 2,
        202
      );
    }
  }

  //starting posion of pac-man
  let pacmanCurrentIndex = 77;
  squares[pacmanCurrentIndex].classList.add("pac-man");

  function removePacman() {
    squares[pacmanCurrentIndex].classList.remove("pac-man");
    squares[pacmanCurrentIndex].classList.remove("pac-man-right");
    squares[pacmanCurrentIndex].classList.remove("pac-man-left");
    squares[pacmanCurrentIndex].classList.remove("pac-man-down");
    squares[pacmanCurrentIndex].classList.remove("pac-man-up");
  }

  //move pac-man
  function movePacman(e) {
    removePacman();
    switch (e.keyCode) {
      case 37: //left
        if (
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex - 1].classList.contains("wall")
          // !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= 1;
        squares[pacmanCurrentIndex].classList.add("pac-man");
        squares[pacmanCurrentIndex].classList.add("pac-man-left");
        break;
      case 38: //up
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains("wall")
          // !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= width;
        squares[pacmanCurrentIndex].classList.add("pac-man");
        squares[pacmanCurrentIndex].classList.add("pac-man-up");
        break;
      case 39: //right
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex + 1].classList.contains("wall")
          // !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += 1;
        squares[pacmanCurrentIndex].classList.add("pac-man");
        squares[pacmanCurrentIndex].classList.add("pac-man-right");
        break;
      case 40: //down
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains("wall")
          // !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += width;
        squares[pacmanCurrentIndex].classList.add("pac-man");
        squares[pacmanCurrentIndex].classList.add("pac-man-down");
        break;
    }
    squares[pacmanCurrentIndex].classList.add("pac-man");

    //add touch screen
    const myButton = document.getElementById("myButton");
    let buttonClickCount = 0;

    myButton.addEventListener(
      "touchstart",
      (e) => {
        // Increment the button click count
        buttonClickCount += 1;
      },
      false
    );

    pacDotEaten();
    powerPelletEaten();
    checkForGameOver();
    checkForWin();
  }
  document.addEventListener("keyup", movePacman);

  //what happens when Pac-man eats a pac-dot:
  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
      score += 10;
      scoreDisplay.innerHTML = score;
      squares[pacmanCurrentIndex].classList.remove("pac-dot");
    }
  }

  //what happens when you eat a power-pellet
  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
      score += 15;
      ghosts.forEach((ghost) => (ghost.isScared = true));
      setTimeout(unScareGhosts, 10000);
      squares[pacmanCurrentIndex].classList.remove("power-pellet");
    }
  }

  //make the ghosts stop appearing as aquamarine
  function unScareGhosts() {
    ghosts.forEach((ghost) => (ghost.isScared = false));
  }

  //create Ghost tamplate
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.timerId = NaN;
      this.isScared = false;
    }
  }

  ghosts = [
    new Ghost("blinky", 15, 250),
    new Ghost("pinky", 36, 200),
    new Ghost("inky", 82, 300),
    new Ghost("clyde", 86, 150),
  ];

  //draw my ghosts onto the grid
  ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add("ghost");
  });

  //move the ghosts rendomly
  ghosts.forEach((ghost) => moveGhost(ghost));

  //the function to move the ghosts
  function moveGhost(ghost) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];
    ghost.timerId = setInterval(function () {
      //if the next squeres your ghost is going to go in does NOT contain a wall and a ghost, you can go there
      if (
        !squares[ghost.currentIndex + direction].classList.contains("wall") &&
        !squares[ghost.currentIndex + direction].classList.contains("ghost")
      ) {
        //you can go there
        //remove all ghost related classes
        squares[ghost.currentIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared-ghost"
        );
        //change the currentIndex to the new safe square
        ghost.currentIndex += direction;
        //redraw the ghost in the new safe place
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
      }
      //else find new direction to try
      else
        direction = directions[Math.floor(Math.random() * directions.length)];

      //if the ghost is currently scared
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add("scared-ghost");
      }
      //if the ghost is scared and pacman runs into it (eat it)
      if (
        ghost.isScared &&
        squares[ghost.currentIndex].classList.contains("pac-man")
      ) {
        squares[ghost.currentIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared-ghost"
        );
        ghost.currentIndex = ghost.startIndex;
        score += 10;
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
      }
      checkForGameOver();
    }, ghost.speed);
  }

  //check for game over
  function checkForGameOver() {
    if (
      squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      // setTimeout(function () {
      //   alert("Game Over!");
      // }, 500);
      scoreDisplay.innerHTML =
        " Game Over! you have scored " + score + " points";
    }
  }

  //check for a win
  function checkForWin() {
    if (score === 100) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      scoreDisplay.innerHTML = "WOW YOU WON! with a score of: " + score;
    }
  }
});

//--------------------------------Part 2-----------------------------------------------
