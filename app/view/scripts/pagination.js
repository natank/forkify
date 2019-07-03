import {
    domElements
} from './elements';

export class Pagination {
    constructor(props) {
        this.numPages = props.numPages;
        this.currentPage = props.currentPage;
    }
    render() {
        let isLeft = (this.currentPage > 1)
        let isRight = (this.currPage < this.numPages)
        let paginationHTML =
            `<div class="results__pages">
                ${ isLeft ?
                    `<button class="btn-inline results__btn--prev"> 
                    <svg class="search__icon"> 
                        <use xlink:href="./images/spritemap.svg#sprite-triangle-left"></use> 
                    </svg><span>Page ${this.currentPage-1}</span> 
                    </button>`:''
                }
                ${ isRight ?
                `<button class="btn-inline results__btn--next"><span>${this.currentPage+1}</span> 
                <svg class="search__icon"> 
                    <use xlink:href="./images/spritemap.svg#sprite-triangle-right"></use> 
                </svg>
                </button>`:''
                }
            </div>`
        domElements.results.innerHTML += paginationHTML;
    }
}