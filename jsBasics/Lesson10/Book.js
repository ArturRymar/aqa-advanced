export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    };

    static oldestBook(...books) {
        books.sort((a, b) => a._year - b._year);
        return books[0];
    }

    get name() {
        return this._name;
    };

    get author() {
        return this._author;
    };

    get year() {
        return this._year;
    };

    set name(value) {
        if (typeof (value) !== "string") {
            throw new Error("Book name must be string!");
        };
        return this._name = value;
    };

    set author(value) {
        if (typeof (value) === "number") {
            throw new Error("Author can`t be number!");
        };
        return this._author = value;
    };

    set year(value) {
        if (typeof (value) !== "number") {
            throw new Error("Year must be number!");
        }
        return this._author = value;
    };

    printInfo() {
        return `Book name is ${this.name}, author - ${this.author}, published in ${this.year}.`;
    };
};