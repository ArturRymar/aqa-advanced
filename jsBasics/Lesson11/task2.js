let getToDo = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((responseResult) => responseResult.json())
    .catch((error) => console.error("Помилка - ", error));
;
// getToDo.then(console.log) - перевірити результат промісу


let getUsers = fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((responseResult) => responseResult.json())
    .catch((error) => console.error("Помилка - ", error));
;
// getUser.then(console.log) - перевірити результат промісу

let promiseCollectionAll = Promise.all([getToDo, getUsers]);
promiseCollectionAll.then(console.log);

let promiseCollectionRace = Promise.race([getToDo, getUsers]);
promiseCollectionRace.then(console.log);