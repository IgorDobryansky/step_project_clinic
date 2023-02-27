import "../index.html";
import "../styles/index.scss";

import Visit from "./prepare.js";
import Login from "./Components/Login.js";
import { getAllVisits, putVisit } from "./helpers/visitRequests.js";

function app() {
  const visitsBoard = document.getElementById("visits");

  const loginStatus = document.getElementById("login-status");
  loginStatus.append(new Login().render());

  visitsBoard.append(new Visit().render());

  //   getAllVisits().then((array) => console.log(array));
}

app();
