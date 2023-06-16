document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const width = 20; //28 X 28 = 784 squares
  let score = 0;

  //layout of grid and what is in the squares
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4,
    0, 1, 0, 4, 4, 4, 4, 4, 0, 1, 0, 4, 4, 3, 1, 1, 4, 4, 4, 4, 4, 1, 1, 4, 2,
    4, 1, 4, 4, 1, 4, 4, 4, 4, 1, 1, 3, 4, 4, 4, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1,
    4, 2, 4, 4, 1, 1, 0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 1, 0, 4, 4, 4, 1,
    1, 1, 1, 1, 1, 4, 4, 1, 4, 4, 4, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 3, 4, 4, 4,
    4, 4, 1, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 2, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 1, 4, 4, 1, 1, 0, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 0, 1, 3, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
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
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
    }
  }
  createBoard();

  //starting posion of pac-man
  let pacmanCurrentIndex = 169;
  squares[pacmanCurrentIndex].classList.add("pac-man");

  //move pac-man
  function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove("pac-man");

    switch (e.keyCode) {
      case 37: //left
        if (
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex - 1].classList.contains("wall")
          // !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= 1;

        //check if pac-man on the left exit
        if (pacmanCurrentIndex - 1 === 363) {
          pacmanCurrentIndex === 391;
          squares[364].classList.remove("pac-man");
        }
        break;
      case 38: //up
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains("wall")
          // !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= width;
        break;
      case 39: //right
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex + 1].classList.contains("wall")
          // !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += 1;

        //check if pac-man on the left exit
        if (pacmanCurrentIndex + 1 === 392) {
          pacmanCurrentIndex === 364;
          squares[391].classList.remove("pac-man");
        }
        break;
      case 40: //down
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains("wall")
          // !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += width;
        break;
    }
    squares[pacmanCurrentIndex].classList.add("pac-man");

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
    new Ghost("blinky", 22, 250),
    new Ghost("pinky", 50, 200),
    new Ghost("inky", 76, 300),
    new Ghost("clyde", 143, 150),
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

//-----------------------------------PART 2--------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   const grid2 = document.querySelector(".grid2");
//   const width2 = 20; //28 X 28 = 784 squares

//   //layout of grid and what is in the squares
//   const layout2 = [
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4,
//     0, 1, 0, 4, 4, 4, 4, 4, 0, 1, 0, 4, 4, 3, 1, 1, 4, 4, 4, 4, 4, 1, 1, 4, 2,
//     4, 1, 4, 4, 1, 4, 4, 4, 4, 1, 1, 3, 4, 4, 4, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1,
//     4, 2, 4, 4, 1, 1, 0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 1, 0, 4, 4, 4, 1,
//     1, 1, 1, 1, 1, 4, 4, 1, 4, 4, 4, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 3, 4, 4, 4,
//     4, 4, 1, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 2, 4, 4, 4, 4, 4, 4, 4,
//     4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
//     4, 1, 4, 4, 1, 1, 0, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 0, 1, 3, 0, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   ];

//   const squares2 = [];

//   // legend:
//   // 0= dots
//   // 1= wall
//   // 2= gosts
//   // 3= power pellet
//   // 4= empty

//   //draw the grid and render it
//   function createBoard2() {
//     for (let i = 0; i < layout.length; i++) {
//       const square2 = document.createElement("div");
//       grid2.appendChild(square2);
//       squares2.push(square2);

//       //add layout to the board
//       if (layout2[i] === 0) {
//         squares2[i].classList.add("pac-dot");
//       } else if (layout[i] === 1) {
//         squares2[i].classList.add("wall");
//       } else if (layout2[i] === 2) {
//         squares2[i].classList.add("ghost-lair");
//       } else if (layout2[i] === 3) {
//         squares2[i].classList.add("power-pellet");
//       }
//     }
//   }
//   createBoard2();

//   }

//   //create Ghost tamplate
//   class Ghost2 {
//     constructor(className, startIndex, speed) {
//       this.className2 = className2;
//       this.startIndex2 = startIndex2;
//       this.speed2 = speed2;
//       this.currentIndex2 = startIndex2;
//       this.timerId2 = NaN;
//       this.isScared2 = false;
//     }
//   }

//   ghosts2 = [
//     new Ghost2("blinky", 1, 250),
//     new Ghost2("pinky", 2, 200),
//     new Ghost2("inky", 3, 300),
//     new Ghost2("clyde", 4, 150),
//   ];

//   //draw my ghosts onto the grid
//   ghosts2.forEach((ghost2) => {
//     squares2[ghost2.currentIndex].classList.add(ghost2.className);
//     squares2[ghost2.currentIndex].classList.add("ghost");
//   });

//   //move the ghosts rendomly
//   ghosts2.forEach((ghost2) => moveGhost2(ghost2));

//   //the function to move the ghosts
//   function moveGhost2(ghost2) {
//     const directions2 = [-1, +1, width2, -width2];
//     let direction2 = directions2[Math.floor(Math.random() * directions2.length)];
//     ghost2.timerID = setInterval(function () {
//       //if the next squeres your ghost is going to go in does NOT contain a wall and a ghost, you can go there
//       if (
//         !squares[ghost.currentIndex + direction].classList.contains("wall") &&
//         !squares[ghost.currentIndex + direction].classList.contains("ghost")
//       ) {
//         //you can go there
//         //remove all ghost related classes
//         squares[ghost.currentIndex].classList.remove(
//           ghost.className,
//           "ghost",
//           "scared-ghost"
//         );
//         //change the currentIndex to the new safe square
//         ghost.currentIndex += direction;
//         //redraw the ghost in the new safe place
//         squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
//       }
//       //else find new direction to try
//       else
//         direction = directions[Math.floor(Math.random() * directions.length)];

//       //if the ghost is currently scared
//       if (ghost.isScared) {
//         squares[ghost.currentIndex].classList.add("scared-ghost");
//       }
//       //if the ghost is scared and pacman runs into it (eat it)
//       if (
//         ghost.isScared &&
//         squares[ghost.currentIndex].classList.contains("pac-man")
//       ) {
//         squares[ghost.currentIndex].classList.remove(
//           ghost.className,
//           "ghost",
//           "scared-ghost"
//         );
//         ghost.currentIndex = ghost.startIndex;
//         score += 10;
//         squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
//       }
//       checkForGameOver();
//     }, ghost.speed);
//   }
// });
