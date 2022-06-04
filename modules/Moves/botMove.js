import checkIfWon from "../checkIfWon.js";
import setPoints from "../Points/setPoints.js";

const wrapperTile = document.querySelector('#wrapperTile');
const playerBotValues=[];

const botMove = (allTilesClicked, totalPlays) =>{
    while(true){
        // Until you get an unselected tile, keep trying
        const randomTile = Math.ceil(Math.random()*9) + ""; // Convert to string
        if(allTilesClicked.indexOf(randomTile) === -1){
            playerBotValues.push(randomTile);
            allTilesClicked.push(randomTile);

            // Update the Tile in DOM
            for(let childTile of wrapperTile.children){
                if(childTile.id === randomTile)
                    childTile.textContent = 'O';
            }
            if(totalPlays >=5){
                if(checkIfWon(playerBotValues)){
                    // Add a setTimout else, alert will be called before the final tile is marked.
                    setTimeout(() => {
                        setPoints('playerO');
                        alert("Bot wins!");
                        location.reload();
                    }, 0);
                }
            }

            break;
        }
    }
}
export default botMove;