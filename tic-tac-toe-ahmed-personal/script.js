// App's Variables
let board, turn, winner;

// all the winning combos for the game
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let player = true;
  let count = 0;
  let maxSquare = 8;
  let trackXClicked = []
  let trackOClicked = []
  
  //Main functionality of the code
  const squares = document.getElementsByClassName("tictactoe")
  for (let i = 0; i < maxSquare; i++) {
    Array.from(squares).forEach(function (square) {
      square.addEventListener('click', handleClick, {once: true}
      )

    })
  }
  // Check to see who won the game
  function checkWinner (){
    console.log("checkWinner")
    for(i=0; i < winningCombos.length; i++){
      const combo = winningCombos[i]
      const filteredX = combo.filter(value => trackXClicked.includes(value))
      const filteredO = combo.filter(value => trackOClicked.includes(value))
      if(filteredX.sort().join("") === winningCombos[i].join("")) {
        alert('X won')
      }else if(filteredO.sort().join("") === winningCombos[i].join("")) {
        alert('O won')
      
      }
  }
}
  // Logic to make sure you cannot change the 'x' and 'o' values once its been clicked
function handleClick(event) {
  const squareClicked = event.target
  if (player === true) {
    trackXClicked.push(parseInt(squareClicked.id))
    squareClicked.textContent = "x"
    player = !player
    console.log(trackXClicked)
  } else if (player === false) {
    trackOClicked.push(parseInt(squareClicked.id))
    squareClicked.textContent = "o"
    player = !player
    console.log(trackOClicked)
  }
  checkWinner()
}


  //Reset Board function
  function resetBoard() {
    Array.from(squares).forEach(function (square) {
      square.textContent = " "
      
    })
    window.location.reload()
  };
  