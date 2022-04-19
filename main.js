const gameBoard = (() => {
    //Board
    let board = [];
    for (i = 0; i < 9; i++){
        board.push("");
    };

    let classisGame = false
    // Counter
    let counter = 1;

    let cells = document.querySelector(".board");
    let restartButtonEL = document.querySelector(".restartButton");
    let startButtonEL = document.querySelector(".startButton");
    let classicGameEl = document.querySelector(".classic");
    let AIgameEl = document.querySelector(".AIgame");

    // Classis game event listener
    classicGameEl.addEventListener("click", () => {
        document.querySelector(".gameMode-parent").style.display = "none";
        alert("X is first");
        classisGame = true;
    });

    AIgameEl.addEventListener("click", () => {
        document.querySelector(".gameMode-parent").style.display = "none";
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
        gameBoard.counter = 1;
        // Children element
        let cellsChildrens = cells.children;
        // Restart current player
        game.currentPlayer = "X";
        // Restarting all child elements
        for(let i = 0; i < 9; i ++){
            cellsChildrens[i].innerHTML = "";
        };
    }

    // Making tic-tac-toe grid 
    board.forEach((item) => {
        const cell = document.createElement("div");
        cell.className = "cell";
        cells.appendChild(cell);
    });

    // Turning object in grid and placing x or o value in board array
    Array.from(cells.children).forEach((cell, index) => {
        cell.addEventListener("click", () => {
            // You can not take spots that are already taken
            if(board[index] !== ""){
                console.log("That spot is already taken!!")
            }else if(classisGame){
                counter += 1;
                    // Add value in array
                board[index] = game.currentPlayer;
                // Add value on screen
                cell.innerHTML = game.currentPlayer;
                // Moving event listener on clicked cells
                /*cell.style.pointerEvents = "none";*/
                // Chech winner function
                game.checkWinner()
                // Check tie function
                game.checkTie();
                // Change player function
                game.changePLayer();

                AI.availableCells()

                /*AI.randomPosition()

                AI.checkPosition()*/
            };
        });
    });

    return{board,
        counter,
        restartGame}

})();

const game = (() => {

    //Current player
    let currentPlayer = "X"

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
        }else{
            gameBoard.counter += 1;
        }
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
        checkWinner
    };
})();

// AI object
const AI = (() => {

    let availableSpots = []
    let AIPosition 
    // Finding available cells on board
    function availableCells(){
        availableSpots = []
        for(let i = 0; i < 9; i++){
            if(gameBoard.board[i] === ""){
                availableSpots.push(i)
            }else{
                console.log("That spot is not available")
            };
        console.log(i)
        };
    };

    // Random cell generator
    function randomPosition(){
        AIPosition = (Math.floor(Math.random() * 9) + 1);
        
    }

    // Check position function
    function checkPosition(){
        for(let i = 0; i < availableSpots.length; i++){
            if(AIPosition === availableSpots[i]){
                console.log(AIPosition)
            }else{
                console.log("no")
            }
        };
    };

    return{
        availableCells,
        randomPosition,
        checkPosition,
    }
})();



































