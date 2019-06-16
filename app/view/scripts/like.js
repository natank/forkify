import like from '../templates/like.pug'


export default class Like {
    constructor(like){
        this.node = document.createElement('div');
        this.node.innerHTML = like();
    }
}