async function getToDo() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (response.ok === "false") {
            throw new Error('Request failed');
        };
        let responseResult = await response.json();
        return responseResult;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
};
//getToDo().then(console.log) - перевірити результат промісу

async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (response.ok === "false") {
            throw new Error('Request failed');
        };
        let responseResult = await response.json();
        return responseResult;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
//getUser().then(console.log) - перевірити результат промісу

let promiseCollectionAll = Promise.all([getToDo(), getUsers()]);
promiseCollectionAll.then(console.log);

let promiseCollectionRace = Promise.race([getToDo(), getUsers()]);
promiseCollectionRace.then(console.log);