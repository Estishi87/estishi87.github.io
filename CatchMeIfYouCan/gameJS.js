//-------PART ONE----MOVING LETTERS ON TOP OF SCREEN----------------------------------------

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

  // legend:
  // 0= empty
  // 1= color
  // 2= color
  // 3= color

  //draw the letters
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

//-----------------------------------PART 2-THE GAME-------------------------------------------
//****************************************************************************************************** */
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

document.addEventListener("DOMContentLoaded", () => {
  const gridGame = document.querySelector(".gridGame");
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
  // 0= ice cream
  // 1= wall
  // 2= family
  // 3= donut
  // 4= empty space

  //draw the grid
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      gridGame.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("icecream");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
        // document.querySelector("#wall").classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("family");
      } else if (layout[i] === 3) {
        squares[i].classList.add("donut");
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

  //starting posion of Lisa
  let lisaCurrentIndex = 77;
  squares[lisaCurrentIndex].classList.add("lisa");

  function removeLisa() {
    squares[lisaCurrentIndex].classList.remove("lisa");
    squares[lisaCurrentIndex].classList.remove("lisa-right");
    squares[lisaCurrentIndex].classList.remove("lisa-left");
    squares[lisaCurrentIndex].classList.remove("lisa-down");
    squares[lisaCurrentIndex].classList.remove("lisa-up");
  }

  //move lisa
  function moveLisa(e) {
    removeLisa();
    switch (e.keyCode) {
      case 37: //left
        if (
          lisaCurrentIndex % width !== 0 &&
          !squares[lisaCurrentIndex - 1].classList.contains("wall")
          // !squares[lisaCurrentIndex - 1].classList.contains("family")
        )
          lisaCurrentIndex -= 1;
        squares[lisaCurrentIndex].classList.add("lisa");
        squares[lisaCurrentIndex].classList.add("lisa-left");
        break;
      case 38: //up
        if (
          lisaCurrentIndex - width >= 0 &&
          !squares[lisaCurrentIndex - width].classList.contains("wall")
          // !squares[lisaCurrentIndex - width].classList.contains("family")
        )
          lisaCurrentIndex -= width;
        squares[lisaCurrentIndex].classList.add("lisa");
        squares[lisaCurrentIndex].classList.add("lisa-up");
        break;
      case 39: //right
        if (
          lisaCurrentIndex % width < width - 1 &&
          !squares[lisaCurrentIndex + 1].classList.contains("wall")
          // !squares[lisaCurrentIndex + 1].classList.contains("family")
        )
          lisaCurrentIndex += 1;
        squares[lisaCurrentIndex].classList.add("lisa");
        squares[lisaCurrentIndex].classList.add("lisa-right");
        break;
      case 40: //down
        if (
          lisaCurrentIndex + width < width * width &&
          !squares[lisaCurrentIndex + width].classList.contains("wall")
          // !squares[lisaCurrentIndex + width].classList.contains("family")
        )
          lisaCurrentIndex += width;
        squares[lisaCurrentIndex].classList.add("lisa");
        squares[lisaCurrentIndex].classList.add("lisa-down");
        break;
    }
    squares[lisaCurrentIndex].classList.add("lisa");

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

    icecreamEaten();
    donutEaten();
    checkForGameOver();
    checkForWin();
  }
  document.addEventListener("keyup", moveLisa);

  //what happens when you eat a icecream:
  function icecreamEaten() {
    if (squares[lisaCurrentIndex].classList.contains("icecream")) {
      score += 10;
      scoreDisplay.innerHTML = score;
      squares[lisaCurrentIndex].classList.remove("icecream");
    }
  }

  //what happens when you eat a donut
  function donutEaten() {
    if (squares[lisaCurrentIndex].classList.contains("donut")) {
      score += 15;
      scoreDisplay.innerHTML = score;
      simpsons.forEach((simpson) => (simpson.isHappy = true));
      setTimeout(unHappySimpsons, 10000);
      squares[lisaCurrentIndex].classList.remove("donut");
    }
  }

  //make the simpsons stop being happy and attack again
  function unHappySimpsons() {
    simpsons.forEach((simpson) => (simpson.isHappy = false));
  }

  //create simpsons tamplate
  class Simpson {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.timerId = NaN;
      this.isHappy = false;
    }
  }

  //all the simpsons
  simpsons = [
    new Simpson("maggie", 15, 250),
    new Simpson("homer", 36, 200),
    new Simpson("bart", 82, 300),
    new Simpson("marge", 86, 150),
  ];

  //draw my simpsons onto the grid
  simpsons.forEach((simpson) => {
    squares[simpson.currentIndex].classList.add(simpson.className);
    squares[simpson.currentIndex].classList.add("simpson");
  });

  //move the simpsons rendomly
  simpsons.forEach((simpson) => moveSimpson(simpson));

  //the function to move the simpsons
  function moveSimpson(simpson) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];
    simpson.timerId = setInterval(function () {
      //if the next squeres your simpson is going to go in does NOT contain a wall and a simpson, you can go there
      if (
        !squares[simpson.currentIndex + direction].classList.contains("wall") &&
        !squares[simpson.currentIndex + direction].classList.contains("simpson")
      ) {
        //you can go there
        //remove all simpsons related classes
        squares[simpson.currentIndex].classList.remove(simpson.className);
        squares[simpson.currentIndex].classList.remove(
          "simpson",
          "happy-simpson"
        );
        //change the currentIndex to the new safe square
        simpson.currentIndex += direction;
        //redraw the simpson in the new safe place
        squares[simpson.currentIndex].classList.add(
          simpson.className,
          "simpson"
        );
      }
      //else find new direction to try
      else
        direction = directions[Math.floor(Math.random() * directions.length)];

      //if the simpson is currently happy
      if (simpson.isHappy) {
        squares[simpson.currentIndex].classList.add("happy-simpson");
      }
      //if the simpson is happy and lisa runs into it
      if (
        simpson.isHappy &&
        squares[simpson.currentIndex].classList.contains("lisa")
      ) {
        squares[simpson.currentIndex].classList.remove(
          simpson.className,
          "simpson",
          "happy-simpson"
        );
        simpson.currentIndex = simpson.startIndex;
        score += 10;
        squares[simpson.currentIndex].classList.add(
          simpson.className,
          "simpson"
        );
      }
      checkForGameOver();
    }, simpson.speed);
  }

  //check for game over
  function checkForGameOver() {
    if (
      squares[lisaCurrentIndex].classList.contains("simpson") &&
      !squares[lisaCurrentIndex].classList.contains("happy-simpson")
    ) {
      simpsons.forEach((simpson) => clearInterval(simpson.timerId));
      document.removeEventListener("keyup", moveLisa);
      // setTimeout(function () {
      //   alert("Game Over!");
      // }, 500);
      scoreDisplay.innerHTML =
        " Game Over! you have scored " + score + " points";
    }
  }

  //check for a win
  function checkForWin() {
    if (score >= 100) {
      simpsons.forEach((simpson) => clearInterval(simpson.timerId));
      document.removeEventListener("keyup", moveLisa);
      scoreDisplay.innerHTML = "WOW YOU WON! with a score of: " + score;
    }
  }
});

//--------------------------------Part 2-----------------------------------------------
