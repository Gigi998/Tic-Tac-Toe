const gameBoard = (() => {

    //Board
    let board = [];
    for (i = 0; i < 9; i++){
        board.push("");
    };

    let AIGame = false
    // Counter
    let counter = 0;

    let cells = document.querySelector(".board");
    let restartButtonEL = document.querySelector(".restartButton");
    let startButtonEL = document.querySelector(".startButton");
    let classicGameEl = document.querySelector(".classic");
    let AIgameEl = document.querySelector(".AIgame");

    // Classis game event listener
    classicGameEl.addEventListener("click", () => {
        document.querySelector(".gameMode-parent").style.display = "none";
        alert("X is first");
    });

    AIgameEl.addEventListener("click", () => {
        document.querySelector(".gameMode-parent").style.display = "none";
        gameBoard.restartGame()
        AIGame = true;
    })

    // Restart button event listener
    restartButtonEL.addEventListener("click", restartGame)

    // Start game function
    startButtonEL.addEventListener("click", startGame)

    // Start game function
    function startGame(){
        document.querySelector(".gameMode-parent").style.display = "block";
    }
        
    // Restart game function
    function restartGame(){
        for(let i = 0; i < 9; i++){
            gameBoard.board[i] = "";
        };
        // Restarting counter
        gameBoard.counter = 0;
        // Children element
        let cellsChildrens = cells.children;
        // Restart current player
        game.currentPlayer = "X";
        // Restarting all child elements
        for(let i = 0; i < 9; i ++){
            cellsChildrens[i].innerHTML = "";
        };
        AIGame = false
    };

    // Turning object in grid and placing x or o value in board array
    Array.from(cells.children).forEach((cell, index) => {
        cell.addEventListener("click", () => {
            // You can not take spots that are already taken
            if(board[index] !== ""){
                console.log("That spot is already taken!!")
            }else{
                gameBoard.counter += 1;
                // Add value in array
                board[index] = game.currentPlayer;
                // Add value on screen
                cell.innerHTML = game.currentPlayer;
                // handle winner and who's turn is
                game.handleLogic()
                // If AIGame execute this
                if(AIGame){
                    // Check available position update board and display it
                    AI.AIMove();
                    game.handleLogic();
                };
            };
        });
    });

    return{board,
        counter,
        restartGame,
        AIGame}

})();

const game = (() => {

    //Current player
    let currentPlayer = "X"

    // Function that executes after player move
    function handleLogic(){
        game.checkWinner()
        game.checkTie()
        game.changePLayer()
    };
    // Change player function
    function changePLayer(){

        if(this.currentPlayer === "X"){
            this.currentPlayer = "O"
        }else{
            this.currentPlayer = "X"
        }
    };

    // Check winner function
    function checkWinner(){
        winningConditions.forEach((index) => {
            if(gameBoard.board[index[0]] === this.currentPlayer && gameBoard.board[index[1]] === this.currentPlayer && gameBoard.board[index[2]] === this.currentPlayer){
                alert(this.currentPlayer + " has won!")
                gameBoard.restartGame()
            };
        });
    };

    // Check tie function
    function checkTie(){
        if(gameBoard.counter === 9){
            alert("It is a tie")
            gameBoard.restartGame()
        };
    };

    // Winning conditions
    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    return {
        currentPlayer, 
        changePLayer,
        checkTie,
        checkWinner,
        handleLogic
    };
})();

// AI object
const AI = (() => {

    let availableSpots = []
    // Finding available cells on board
    function availableCells(){
        availableSpots = []
        for(let i = 0; i < 9; i++){
            if(gameBoard.board[i] === ""){
                availableSpots.push(i + 1)
            };
        };
    };

    // Random cell generator
    function AIMove(){
        availableCells()
        // Random number
        let AIPosition = Math.floor(Math.random() * (availableSpots.length - 1));
        // Targeting cell element
        const el = document.getElementById("cell" + availableSpots[AIPosition]);
        // Display on screen
        el.innerHTML = game.currentPlayer;
        // Update in board array
        gameBoard.board[availableSpots[AIPosition] - 1] = game.currentPlayer;
    }

    return{
        availableCells,
        AIMove,
    }
})();

