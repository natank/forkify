import pagination from '../templates/pagination.pug';

export default class Pagination {
    constructor(numPages){
        this.node = document.createElement('div');
        this.node.innerHTML = pagination();
    }
}