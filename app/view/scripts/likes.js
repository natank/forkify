import like from '../templates/like.pug'


class Like {
    constructor(props){
        this.node = document.createElement('div');
        
        this.node.innerHTML = like();
    }
}

export default class Likes {
    constructor(Likes) {
        this.node = document.createElement('div');
        let like = new Like();
        this.node.innerHTML += like.node.innerHTML; 
    }
}