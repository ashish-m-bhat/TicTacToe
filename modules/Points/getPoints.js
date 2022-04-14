
// Gets points for a particular player from the localstorage
// Values for the player could be playerX or playerY or tie

const getPoints = (player) =>{
    return localStorage.getItem(player);
}

export default getPoints;
