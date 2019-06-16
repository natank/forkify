import shopping from '../templates/shopping.pug';

export default class Shopping {
    constructor(){
        this.node = document.createElement('div');
        this.node.innerHTML = shopping();
    }
}