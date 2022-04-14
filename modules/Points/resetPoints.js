import getPoints from "./getPoints.js";
import { setInitialPoints } from "./setPoints.js";

// Clear localStorage & reload
const resetPoints = () => {

    // Prevent unnecessary reloads
    if(getPoints('playerX')!=='0' && getPoints('playerO')!=='0' && getPoints('tie')!=='0'){
        localStorage.clear();
        location.reload();
    }
};

export default resetPoints;