import VisitCardiologist from "../Components/Visit/VisitCardiologist.js";
import VisitDentist from "../Components/Visit/VisitDentist.js";
import VisitTherapist from "../Components/Visit/VisitTherapist.js";

import { getAllVisits } from "../Services/VisitsService.js";

export async function renderAllVisits() {
  let response = await getAllVisits();

  document.getElementById("visits").innerHTML = "";

  await response.map((res) => {
    document.getElementById("no-visits-placeholder").style.display = "none";
    if (res.doctor === "Терапевт") new VisitTherapist(res).render();
    else if (res.doctor === "Стоматолог") new VisitDentist(res).render();
    else if (res.doctor === "Кардіолог") new VisitCardiologist(res).render();
  });
}

export function hideInfo() {
  let array1 = document.querySelectorAll(".visit-item")
  
  array1.forEach((item) => {
    item.classList.remove("above-others");
  });
}

// export async function getVisit(visitId) {
//   let request = await fetch(
//     `https://ajax.test-danit.com/api/v2/cards/${visitId}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
//       },
//     }
//   );

//   let response = await request.json();
//   return response;
// }
