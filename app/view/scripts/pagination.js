import pagination from '../templates/pagination.pug';

export default class Pagination {
    constructor(numPages, currPage, isNextPage){
        this.node = document.createElement('div');
        this.node.innerHTML = pagination();

        if(currPage === 1){
            alert('1');
            this.node.querySelector('.results__btn--prev span').innerText = '';
            alert('2');
            this.node.querySelector('results__btn--next').innerText = `Page ${currPage+1}`;
        } else if(currPage === numPages) {
            this.node.querySelector('results__btn--prev').innerText = `Page ${currPage-1}`;
            this.node.querySelector('.results__btn--prev span').innerText = '';
        } else {
            this.node.querySelector('results__btn--prev').innerText = `Page ${currPage-1}`;
            this.node.querySelector('results__btn--next').innerText = `Page ${currPage+1}`;
        }        
    }
}