import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

//Екзеvпляри Book
let firstBook = new Book("Book_One", "Author_One", 2000);
let secondBook = new Book("Book_Two", "Author_Two", 2011);
let thirdBook = new Book("Book_Two", "Author_Two", 2025);
console.log(firstBook.printInfo());
console.log(secondBook.printInfo());
console.log(thirdBook.printInfo());

//Екземпляри EBook
let firstEBook = new EBook("EBook_One", "Ebook_author", 2020, ".pdf");
console.log(firstEBook.printInfo());

//Статичний метод для повернення книги з найдавнішим роком видання
console.log(Book.oldestBook(firstBook, secondBook, thirdBook, firstEBook));

//Статичний метод для створення нової електронної книги з екземпляру класу книга
console.log(EBook.newEBook(firstBook, "****"));