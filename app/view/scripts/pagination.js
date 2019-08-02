import {
    domElements
} from './elements';

let numPages = 0;
let currentPage = 1;

export function init(pages, current = 1) {
    numPages = pages;
    currentPage = current;
}
export function render() {
    let isLeft = (currentPage > 1)
    let isRight = (currentPage < numPages)
    let paginationHTML = getPaginationMarkup(isLeft, isRight);

    let oldPagination = domElements.results.querySelector('.results__pages');
    if (oldPagination) {
        domElements.results.removeChild(oldPagination);
    }
    domElements.results.innerHTML += paginationHTML;

}


let getPaginationMarkup = (isLeft, isRight) =>
    `<div class="results__pages">
        ${ isLeft ?
            `<button class="btn-inline results__btn--prev"> 
            <svg class="search__icon"> 
                <use xlink:href="./images/spritemap.svg#sprite-triangle-left"></use> 
            </svg><span>Page ${currentPage-1}</span> 
            </button>`:''
        }
        ${ isRight ?
        `<button class="btn-inline results__btn--next"><span>${currentPage+1}</span> 
        <svg class="search__icon"> 
            <use xlink:href="./images/spritemap.svg#sprite-triangle-right"></use> 
        </svg>
        </button>`:''
        }
    </div>`