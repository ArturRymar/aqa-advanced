//First class
class getTodo {
    constructor(url) {
        this.url = url;
    };
    async getData() {
        try {
            let response = await fetch(this.url);
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
}
let getToDoInstance = new getTodo("https://jsonplaceholder.typicode.com/todos/1");
getToDoInstance.getData().then(console.log);

//Second class
class getUser {
    constructor(url) {
        this.url = url;
    };
    async getData() {
        try {
            let response = await fetch(this.url);
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
}
let getUserInstance = new getUser("https://jsonplaceholder.typicode.com/users/1")
getUserInstance.getData().then(console.log);