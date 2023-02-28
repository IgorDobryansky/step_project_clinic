import "../index.html";
import "../styles/index.scss";
// import logo from "../img/clinic_logo.png"
// const image = document.createElement("img")
// image.src = logo

import Visit from "./prepare.js";

import Visit2 from "./prepare.js";

import logo from "../img/daily-health-app (1).png"
const image = document.createElement("img")
//image.src = logo


import Login from "./Components/Login/Login.js";
import { getAllVisits, putVisit } from "./helpers/visitRequests.js";


function app() {
  // window.addEventListener('beforeunload', (event) => {
  // event.preventDefault();
  // event.returnValue = '';
  // localStorage.removeItem('clinic-token')
  // });


  Login.isLogged();

  // visitsBoard.append(new Visit().render());

  //   getAllVisits().then((array) => console.log(array));
}

app();

