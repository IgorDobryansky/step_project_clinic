import "../index.html";
import "../styles/index.scss";
// import logo from "../img/clinic_logo.png"
// const image = document.createElement("img")
// image.src = logo

import VisitCardiologist from "./Components/Visit/VisitCardiologist.js";
import VisitDentist from "./Components/Visit/VisitDentist.js";
import VisitTherapist from "./Components/Visit/VisitTherapist.js";

import logo from "../img/daily-health-app (1).png";
const image = document.createElement("img");
//image.src = logo

import Login from "./Components/Login/Login.js";
import { getAllVisits, putVisit } from "./helpers/visitRequests.js";

function app() {


  Login.isLogged();



  let polyanskaya = new VisitTherapist(
    "Полянська Олена Михайлівна",
    "Терапевт",
    23
  );
  polyanskaya.renderVisit();

  
  let dobryanskyi = new VisitDentist(
    "Добрянский Ігор Батьковіч",
    "Стоматолог",
    "10.09.2022"
  );
  dobryanskyi.renderVisit();
  
  let nazarenko = new VisitCardiologist(
    "Назаренко Віктор Вікторовіч",
    "Кардіолог",
    "120/80",
    "8,5",
    "Не було",
    39
  );
  nazarenko.renderVisit();
  
  let ivanov = new VisitDentist(
    "ААААванов Іван Івановіч",
    "Стоматолог",
    "05.12.2021"
  );
  ivanov.renderVisit();
}

app();
