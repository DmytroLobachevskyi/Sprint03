'use strict'

const ticTacToeGame = new TicTacToeGame()
ticTacToeGame.start()
/*
  The constructor function allows you to
  run several tic-tac-toes at once on one page.
*/
function TicTacToeGame() {
    const counter = document.getElementById('turns-count')
    const board = new Board()
    let turn = 0
/*
The start method launches the game,
which allows us to launch the game at the moment we need.
*/
    this.start = function() {
        const area = document.querySelector('#game-area')
        const reloadBtn = document.querySelector('.play-btn')
        area.addEventListener('click', takeTurn)
        reloadBtn.addEventListener('click', () => location.reload())
    }
/*
The function checks whose move it is and
makes it depending on the information received
*/
    function takeTurn(event) {
        if (turn % 2 === 0) {
            if (fillCell(event.target, 'x', 'player-two', 'player-one') === -1)
                return
        } else {
            if (fillCell(event.target, 'o', 'player-one', 'player-two') === -1)
                return
        }

        turn++
        counter.innerHTML = turn
        if (check(board.checkForWinner(), turn)) return
    }
/*
The function checks if the winner is found,
if it finds it, it renders the page for the winner
*/
    function check(isWinner, turn) {
        if (isWinner || turn === 9) {
            event.currentTarget.removeEventListener('click', takeTurn)
            event.currentTarget.className += ' locked-area'
            removeTurnStatus(turn % 2 === 0 ? 'player-one' : 'player-two')
            if (turn === 9 && !isWinner) {
                document.querySelector('.sidebar').className += ' sidebar-yellow'
                document.querySelector('.result').innerHTML = 'It\'s a draw'
            }
            return true
        }
        return false
    }
/*
The function marks occupied cells, makes them inactive
*/
    function fillCell(e, letter, turn, notTurn) {
        if (e.innerText === '') {
            e.innerHTML = letter
            e.className += ' closed-cell'
        } else {
            return -1
        }
        setTurnStatus(turn)
        removeTurnStatus(notTurn)
    }
/*
Set turn status
*/
    function setTurnStatus(playerTurn) {
        document.getElementById(playerTurn).classList.add('turn')
    }
/*
Remove turn status
*/
    function removeTurnStatus(playerNotTurn) {
        document.getElementById(playerNotTurn).classList.remove('turn')
    }
}
/*
  Constructor Board creates a software copy of the play area
*/
function Board() {
    this.sections = Array.from(document.querySelectorAll('.game-area__section'))
/*
The method shoots everyone away and looks
for winning combinations if it finds victory cells
*/
    this.checkForWinner = function() {
        let winner = false
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        const sections = this.sections

        winningCombinations.forEach(winningCombo => {
            const pos0InnerText = sections[winningCombo[0]].innerText
            const pos1InnerText = sections[winningCombo[1]].innerText
            const pos2InnerText = sections[winningCombo[2]].innerText
            const isWinningCombo = pos0InnerText !== '' &&
            pos0InnerText === pos1InnerText &&
            pos1InnerText === pos2InnerText
            
        if (isWinningCombo) {
            winner = true
            winningCombo.forEach(index => {
                sections[index].className += ' winner'
            })
            showResult(pos0InnerText)
        }
        })
        return winner
    }
/*
The function looks at who won and gives the corresponding result
*/
    function showResult(whoIsWinner) {
        const result = document.querySelector('.result')
        const sidebar = document.querySelector('.sidebar')
        if (whoIsWinner === 'x') {
            result.innerHTML = 'Player 1 won!'
            sidebar.className += ' sidebar-green'
        } else if (whoIsWinner === 'o') {
            result.innerHTML = 'Player 2 won!'
            sidebar.className += ' sidebar-green'
        }
    }
}