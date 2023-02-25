import "./Search.scss";
import { createElement } from "../../helpers/createElement.js";

export default class Search {
  constructor() {
    this._tagName = "form";
    this._className = "search-form";
  }

  render() {
    const searchForm = createElement(this._tagName, this._className);
    const searchInput = createElement("input", "search-input");
    searchForm.append(searchInput);
    return searchForm;
  }
}
