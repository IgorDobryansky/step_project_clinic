import "../index.html";
import "../styles/index.scss";

import Visit from "./prepare.js";

const visitsBoard = document.getElementById("visits");

visitsBoard.append(new Visit().render());
