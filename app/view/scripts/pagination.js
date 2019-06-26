import pagination from '../templates/pagination.pug';

export default class Pagination {
    constructor(numPages, currPage) {
        this.node = document.createElement('div');
        this.node.innerHTML = pagination();
        if (currPage === 1) {
            this.node.querySelector('.results__btn--prev').style.display = "none";
            this.node.querySelector('.results__btn--next').style.display = "block";

            this.node.querySelector('.results__btn--prev span').innerText = "";
            this.node.querySelector('.results__btn--next span').innerText = `Page ${currPage+1}`;

        } else if (currPage === numPages) {
            this.node.querySelector('.results__btn--prev').style.display = "block";
            this.node.querySelector('.results__btn--next').style.display = "none";

            this.node.querySelector('.results__btn--prev span').innerText = `Page ${currPage-1}`;
            this.node.querySelector('.results__btn--next span').innerText = '';
        } else {
            this.node.querySelector('.results__btn--prev').style.display = "block";
            this.node.querySelector('.results__btn--next').style.display = "block";

            this.node.querySelector('.results__btn--prev span').innerText = `Page ${currPage-1}`;
            this.node.querySelector('.results__btn--next span').innerText = `Page ${currPage+1}`;
        }
    }
}