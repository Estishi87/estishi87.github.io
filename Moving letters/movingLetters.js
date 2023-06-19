document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let colors = ["one", "two", "three", "two"];
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
