import reset from './modules/Points/reset.js';
import {setInitialPoints} from './modules/Points/setPoints.js';
import tileClicked from './modules/tileClicked.js';
import toggleOpponent from './modules/toggleOpponent.js';

window.onload = () =>{
    const wrapperTile = document.querySelector('#wrapperTile');
    wrapperTile.addEventListener('click', tileClicked);

    const resetButton = document.querySelector('#resetButton');
    resetButton.addEventListener('click', reset);

    const toggleUserButton = document.querySelector('#toggleUserButton');
    toggleUserButton.addEventListener('click', toggleOpponent);

    // Check if the isOpponentBot bool is true
    // If yes, change the toggle button content
    // If not, it could be either false or null. In either case, set it to false.
    if(localStorage.getItem('isOpponentBot') === 'true')
        toggleUserButton.textContent = "Multi Player ?";
    else{
        toggleUserButton.textContent = "BoT ?";
        localStorage.setItem('isOpponentBot', false);
    }

    setInitialPoints();


}

