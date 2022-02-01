const user = document.querySelector(".name")

let userN = localStorage.getItem('myObj')
let result = JSON.parse(userN);//парсим localStorage
console.log(userN)
/* renderData(userN)
function renderData(userN) { */
    user.innerHTML = `<h1 class="title">${result.user}</h1>`
//}