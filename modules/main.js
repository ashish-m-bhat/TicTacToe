import resetPoints from './Points/resetPoints.js';
import {setInitialPoints} from './Points/setPoints.js';
import tileClicked from './tileClicked.js';

setInitialPoints();

const wrapperTile = document.querySelector('#wrapperTile');
wrapperTile.addEventListener('click', tileClicked);

const resetPointsButton = document.querySelector('#resetPointsButton');
resetPointsButton.addEventListener('click', resetPoints);