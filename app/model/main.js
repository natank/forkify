export default class Model {
  constructor() {

  }
  getRecipies(searchString) {
    let encodedURL = `https://www.food2fork.com/api/get?key=a3aa0083a984cf4447b5b313af270582&rId=35382`;
    let URL = `http://127.0.0.1:3000/search/?searchString=${searchString}`;
    alert(`URL=${URL}`);
    return fetch(URL)
      .then(function (response) {
        alert('got resultes:')
        console.log(response);
      });
  }
}