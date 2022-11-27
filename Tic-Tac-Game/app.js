window.addEventListener('DOMContentLoaded', () =>
{
    const tiles = Array.from(document.querySelectorAll('.tile'))
    const playerDisplay = document.querySelector('.player')
    const resetButton = document.getElementById('reset')
    const announcer = document.querySelector('.announcer')

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPalyer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation()
    {
        let roundWon = false;
        for (let i = 0; i <= 7; i++){
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') continue;
            if (a === b && b === c) {
                roundWon = true
                break
            }
        }

        if (roundWon) {
            annonce(currentPalyer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }
        if (!board.includes('')) {
            annonce(TIE);
        }
    }

    const annonce = (type) =>
    {
        switch (type) {
            case PLAYERO_WON:
                announcer.innerText = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerText = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    }

    const isValidAction = (tile) =>
    {
        if (tile.innerText === 'X' || tile.innerText === 'O') return false;
        else return true
    }

    const updateBoard = (index) =>
    {
        board[index] = currentPalyer;
    }

    const changePlayer = () =>
    {
        playerDisplay.classList.remove(`player${currentPalyer}`);
        currentPalyer = currentPalyer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPalyer;
        playerDisplay.classList.add(`player${currentPalyer}`)
    }

    const userAction = (tile, index) => {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = currentPalyer;
            tile.classList.add(`player${currentPalyer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    const resetBoard = () =>
    {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');
        if (currentPalyer === 'O') changePlayer();
        tiles.forEach(tile =>
        {
            tile.innerText = '';
            tile.classList.remove('playerX')
            tile.classList.remove('playerO')
        })
    }

    tiles.forEach((tile, index) =>
    {
        tile.addEventListener('click', () => userAction(tile, index));
    });
    resetButton.onclick = () => resetBoard;
})