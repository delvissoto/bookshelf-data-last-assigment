
function Bookshelf(htmlElement, books = []) {
  this.books = books;
  this.htmlElement = htmlElement;
  this.visibleBooks = books;

 
  this.seed = function (data) {
   
    data.forEach((bookInfo) => {
      const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
      );
      this.addBook(book);
    });

   
    this.visibleBooks = this.books;
    this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));

    this.mylibrary();
  };

 

  
  this.addBook = function (book) {
    this.books.push(book);
  };

  
  this.mylibrary = function () {
    
    const ul = document.createElement("ul");
    const books = this.visibleBooks.map((b) => b.mylibrary());
    ul.replaceChildren(...books);
    this.htmlElement.replaceChildren(ul);
  };

 

  this.filterVisibleBooks = function (criteria) {
    this.visibleBooks = this.books.filter(criteria);
    this.mylibrary();
  };

  this.sortVisibleBooks = function (compareFn) {
    this.visibleBooks.sort(compareFn);
    this.mylibrary();
  };
  this.pushVisibleBooks= function (pushBooks){
    this.visibleBooks.push(pushBooks);
    this.mylibrary();
  }
  
}