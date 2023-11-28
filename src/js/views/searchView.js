// lec(296)
class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    return (this._parentEl.querySelector('.search__field').value = '');
  }

  addHandlerSearch(hanlder) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      hanlder();
    });
  }
}

export default new SearchView();
