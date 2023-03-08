import "../index.html";
import "../styles/index.scss";


import Login from "./Components/Login/Login.js";

function app() {
  !Login.loginStatus && Login.isLogged();
}

app();
