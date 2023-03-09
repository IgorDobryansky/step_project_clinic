export function isHasChildNodes() {
  const visitsContainer = document.querySelector("#visits");
  if (visitsContainer.hasChildNodes()) {
    document.querySelector("#no-visits-placeholder").style.display = "none";
  } else {
    document.querySelector("#no-visits-placeholder").style.display = "block";
  }
}

export function hideInfo() {
  let array1 = [...document.querySelectorAll(".visit-item")];

  Array.isArray(array1) &&
    array1.map((item) => {
      if (item.classList.contains("above-others")) {
        item.classList.remove("above-others");
        item.querySelector(".visit_addinfo").classList.remove("show-info");
        item.querySelector(".button_show").innerText = "Показати більше";
      }
    });
  //   array2.forEach((item) => {
  //     item.classList.remove("show-info");
  //   });
  //   array3.forEach((button) => {
  //     button.innerText = "Показати більше";
  //   });
}
