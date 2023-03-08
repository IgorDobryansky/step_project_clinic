import Muuri from "muuri";

let gridElement = document.querySelector("#visits");
let searchField = document.querySelector("#search_input");
let filterStatusField = document.querySelector("#status-bar_select");
let filterUrgencyField = document.querySelector("#urgency-bar_select");
// Reset field values.
searchField.value = "";

// Set inital search query, active filter
let searchFieldValue = searchField.value.toLowerCase();
let filterStatusFieldValue = filterStatusField.value;
let filterUrgencyFieldValue = filterUrgencyField.value;
// Search, Filter field binding.
searchField.addEventListener("input", function () {
  let newSearch = searchField.value.toLowerCase();
  if (searchFieldValue !== newSearch) {
    searchFieldValue = newSearch;
    filter();
  }
});
filterStatusField.addEventListener("change", filter);
filterUrgencyField.addEventListener("change", filter);

export let grid = new Muuri(gridElement, {
  items: ".visit-item",
  showDuration: 400,
  showEasing: "ease",
  layoutOnInit: true,
  layoutOnResize: true,
  layoutDuration: 400,
  layoutEasing: "ease",
  dragEnabled: true,
  dragSortInterval: 50,
  dragContainer: gridElement,
  dragStartPredicate: function (item, event) {
    let isRemoveAction = elementMatches(
      event.target,
      ".delete-icon"
    );
    return !isRemoveAction
      ? Muuri.ItemDrag.defaultStartPredicate(item, event)
      : false;
  },
  dragReleaseDuration: 400,
  dragReleseEasing: "ease",
  itemClass: "visit-item",
  itemVisibleClass: "muuri-item-shown",
  itemDraggingClass: "muuri-item-dragging",
  itemReleasingClass: "muuri-item-releasing",
});

function filter() {
  grid.filter(function (item) {
    let element = item.getElement();
    let isSearchMatch = !searchFieldValue
      ? true
      : (element.querySelector(".visit-title").innerText || "")
          .toLowerCase()
          .indexOf(searchFieldValue) > -1;

    filterStatusFieldValue = filterStatusField.value;
    let isFilterStatusMatch = !filterStatusFieldValue
      ? true
      : (element.getAttribute("data-status") || "") === filterStatusFieldValue;

    filterUrgencyFieldValue = filterUrgencyField.value;
    let isFilterUrgencyMatch = !filterUrgencyFieldValue
      ? true
      : (element.getAttribute("data-urgency") || "") ===
        filterUrgencyFieldValue;

    return isSearchMatch && isFilterUrgencyMatch && isFilterStatusMatch;
  });
}

export function removeItem(item) {
  if (!item) return;

  grid.hide([item], {
    onFinish: () => {
      grid.remove(item, { removeElements: true });
    },
  });
}

function elementMatches(element, selector) {
    let p = Element.prototype;
    return (
      p.matches ||
      p.matchesSelector ||
      p.webkitMatchesSelector ||
      p.mozMatchesSelector ||
      p.msMatchesSelector ||
      p.oMatchesSelector
    ).call(element, selector);
  }
