import "../index.html";
import "../styles/index.scss";
// import logo from "../img/clinic_logo.png"
// const image = document.createElement("img")
// image.src = logo
import Visit from "./Components/Visit/Visit.js";
import VisitCardiologist from "./Components/Visit/VisitCardiologist.js";
import VisitDentist from "./Components/Visit/VisitDentist.js";
import VisitTherapist from "./Components/Visit/VisitTherapist.js";
<<<<<<< HEAD
import { VisitApi } from "./API/VisitAPI.js";
=======
import searchInput from "./Components/Search/searchInput.js";
>>>>>>> 7c6144ed703eb2d585d5ac9c3b650ed47b6d5605

import logo from "../img/daily-health-app (1).png";
const image = document.createElement("img");
//image.src = logo

import Login from "./Components/Login/Login.js";
import {
  getAllVisits,
  putVisit,
  getVisit,
  renderAllVisits,
} from "./helpers/visitRequests.js";

function app() {
  !Login.loginStatus && Login.isLogged();

  VisitApi.getAllVisits();
  
}

app();
