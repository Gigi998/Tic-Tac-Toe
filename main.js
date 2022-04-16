const gameBoard = (() => {
    //Board
    let board = [];
    for (i = 0; i < 9; i++){
        board.push("");
    };

    // Counter
    let counter = 1;

    // Board element
    let cells = document.querySelector(".board");

    // Restart button element
    let restartButtonEL = document.querySelector(".restartButton");

    // Restart button event listener
    restartButtonEL.addEventListener("click", restartGame)
        
    function restartGame(){
        board = ["","","","","","","","",""];
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
            }else{
                counter += 1;
                    // Add value in array
                board[index] = game.currentPlayer;
                // Add value on screen
                cell.innerHTML = game.currentPlayer;
                // Moving event listener on clicked cells
                /*cell.style.pointerEvents = "none";*/
                // Chech winner function
                game.checkWinner()
                // Change player function
                game.changePLayer();

                game.checkTie();
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
                alert(this.currentPlayer + " won!")
            }
        })
    };

    // Check tie function
    function checkTie(){
        if(gameBoard.counter === 9){
            console.log("It is a tie")
        }
        gameBoard.counter += 1
    }

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
        checkWinner,
        checkTie
    };
})();



































