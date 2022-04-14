import getPoints from "./getPoints.js";

// Store Points using localStorage.
// TODO : Use IndexedDB in future

const playerXPointsPlaceholder = document.querySelector('#playerXPointsPlaceholder');
const playerOPointsPlaceholder = document.querySelector('#playerOPointsPlaceholder');
const tiePointsPlaceholder = document.querySelector('#tiePointsPlaceholder');

const setInitialPoints = () => {
    // Check if points entry already exists for each player
    // If not, set it to 0.
    localStorage.setItem('playerX', getPoints('playerX') ?? 0);
    localStorage.setItem('playerO', getPoints('playerO') ?? 0);
    localStorage.setItem('tie', getPoints('tie') ?? 0);

    // Set the points in the Html
    playerXPointsPlaceholder.innerHTML = localStorage.getItem('playerX');
    playerOPointsPlaceholder.innerHTML = localStorage.getItem('playerO');
    tiePointsPlaceholder.innerHTML = localStorage.getItem('tie');
}

const setPoints = (player) =>{
    // Increase the points by One for a particular player
    const points = +getPoints(player) + 1;
    localStorage.setItem(player, points);

    // Depending on the player, update the Html
    let placeholder = player==='playerX'?playerXPointsPlaceholder:player==='playerO'?playerOPointsPlaceholder:tiePointsPlaceholder;
    placeholder.innerHTML = points;
}

export { setInitialPoints };
export default setPoints;
