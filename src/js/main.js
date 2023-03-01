import "../index.html";
import "../styles/index.scss";
// import logo from "../img/clinic_logo.png"
// const image = document.createElement("img")
// image.src = logo
import Visit from "./Components/Visit/Visit.js";
import VisitCardiologist from "./Components/Visit/VisitCardiologist.js";
import VisitDentist from "./Components/Visit/VisitDentist.js";
import VisitTherapist from "./Components/Visit/VisitTherapist.js";

import logo from "../img/daily-health-app (1).png";
const image = document.createElement("img");
//image.src = logo

import Login from "./Components/Login/Login.js";
import { getAllVisits, putVisit, getVisit, renderAllVisits } from "./helpers/visitRequests.js";

function app() {
  Login.isLogged();


// getAllVisits().then(response=>{
//   document.getElementById("visits").innerHTML = "";
//   console.log(response);
//   response.map((res) => {
//     console.log(res);
//     if (res.doctor === "Терапевт") new VisitTherapist(res).render();
//     else if (res.doctor === "Стоматолог") new VisitDentist(res).render();
    // else if (res.doctor === "Кардіолог") new VisitCardiologist(res).render();
//   });
// })

}

app();
