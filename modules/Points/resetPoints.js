import { setInitialPoints } from "./setPoints.js";

// Clear localStorage & reload
const resetPoints = () => {
    localStorage.clear();
    location.reload();
};

export default resetPoints;