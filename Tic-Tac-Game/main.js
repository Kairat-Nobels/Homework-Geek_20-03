window.addEventListener('DOMContentLoaded', () =>
{
    const tiles = Array.from(document.querySelectorAll('.tile'))
    const playerDisplay = document.querySelector('.player')
    const resetButton = document.querySelector('#reset')

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
    // set modal
    function setModal(word)
    {
        const div = document.createElement('div')
        const over = document.createElement('h2')
        const button = document.createElement('button')
        div.setAttribute('class', 'modal')
        button.setAttribute('class', 'btn')
        over.setAttribute('class', 'text');
        over.textContent = word
        button.textContent = 'Restart'
        div.append(over, button)
        document.body.append(div)
        button.onclick = () => location.reload();
    }
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
                setModal('Player O Won')
                break;
            case PLAYERX_WON:
                setModal('Player X Won')
                break;
            case TIE:
                setModal('Draw = TIE')
        }
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
    tiles.forEach((tile, index) =>
    {
        tile.addEventListener('click', () => userAction(tile, index));
    });
})