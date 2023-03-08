import "../index.html";
import "../styles/index.scss";

import { VisitApi } from "./API/VisitAPI.js";



import Login from "./Components/Login/Login.js";


function app() {
  !Login.loginStatus && Login.isLogged();

  VisitApi.getAllVisits();
  
}

app();
