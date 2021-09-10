import View from "./View.js";
import previewView from "./previewView.js";
import icons from "url:../../img/icons.svg";

class BookmarksView extends View {
  _parentElement = document.querySelector(`.bookmarks__list`);
  _errorMessage = `😣😣 No bookmarks found, Find a Recipe and bookmark it`;
  _message = ``;

  addHandlerRener(handler) {
    window.addEventListener(`load`, handler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join(``);
  }
}

export default new BookmarksView();
