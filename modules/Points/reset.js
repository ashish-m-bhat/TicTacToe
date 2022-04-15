import getPoints from "./getPoints.js";
import { setInitialPoints } from "./setPoints.js";

// Clear localStorage & reload
// This means the opponent is set to Multiplayer mode.

const reset = () => {
    localStorage.clear();
    location.reload();
};

export default reset;