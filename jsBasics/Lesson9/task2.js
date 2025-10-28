let book = {
    title: "JavaScript",
    author: "Unknown",
    year: "Owner name"
};

let { title : bookTitle, author : bookAuthor } = book;
console.log(bookTitle, bookAuthor);