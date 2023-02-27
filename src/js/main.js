import "../index.html";
import "../styles/index.scss";
// import logo from "../img/clinic_logo.png"
// const image = document.createElement("img")
// image.src = logo




import Visit from "./prepare.js";
import Login from "./Components/Login.js";
import { getAllVisits, putVisit } from "./helpers/visitRequests.js";

function app() {
  // window.addEventListener('beforeunload', (event) => {
    // event.preventDefault();
    // event.returnValue = '';
    // localStorage.removeItem('clinic-token')
  // });
  const visitsBoard = document.getElementById("visits");

  const loginStatus = document.getElementById("login-status");
  loginStatus.append(new Login().render());

  visitsBoard.append(new Visit().render());

  //   getAllVisits().then((array) => console.log(array));
}

app();
