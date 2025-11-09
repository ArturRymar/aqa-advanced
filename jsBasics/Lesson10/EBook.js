import { Book } from './Book.js';

export class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this._fileFormat = fileFormat;
  }

  static newEBook(bookInstance, format) {
    if (format !== '****') {
      throw new Error('Book format must be ****!');
    }
    return new EBook(
      bookInstance.name,
      bookInstance.author,
      bookInstance.year,
      format
    );
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (value.length > 5) {
      throw new Error('File format is too long');
    }
    this._fileFormat = value;
  }

  printInfo() {
    return `Book name is ${this.name}, author - ${this.author}, published in ${this.year}, file format - ${this.fileFormat}.`;
  }
}
