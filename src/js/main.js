import "../index.html";
import "../styles/index.scss";
import createElement from "./helpers/createElement.js";
import Header from "./Components/Header/Header.js";
import Search from "./components/Search/Search.js";
import {
  postCard,
  deleteCard,
  getCard,
  getAllCards,
  editCard,
} from "./helpers/api-requests.js";

const app = document.getElementById("app");

const header = new Header();
const searchForm = new Search();

app.append(header.render(), searchForm.render());



  // postCard()
//   deleteCard(146160)
// console.log(getCard(146158));

// const newVisit = {
//   age: 23,
//   bp: "24",
//   description: "Плановый визит",
//   doctor: "Cardiologist",
//   id: 146159,
//   title: "Визит к терапевту",
//   weight: 70,
//   bmi: 20,

// };
// editCard(newVisit)
// getCard(146158);
// getCard(146159);
// getAllCards();
