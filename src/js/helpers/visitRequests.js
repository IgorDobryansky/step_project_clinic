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




