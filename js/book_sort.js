//This class allows me to create individual instances/objects that hold different information on a particular book;
class Book {
    constructor(author, language, subject, title) {
        this.author = author,
            this.language = language,
            this.subject = subject,
            this.title = title
    }

    /*
    The purpose of this function is to take information for the first element within the bookData array and assign the values 
    to any new instance of Book. This function will also remove information that was appended into the new instance from the 
    bookData array, so that no duplicate books are rendered and added to the bookshelf. 
  
    Used the splice array method to remove a book from the bookData array after being added to the bookshelf
    */

    getInfo() {
        this.author = bookData[0].author;
        this.language = bookData[0].language;
        this.subject = bookData[0].subject;
        this.title = bookData[0].title;
        bookData.splice(0, 1);
    }

    /*
    Link to event listener that runs getInfo so that the new book gets added to the bookshelf 
    */
    createBook() {
        const bookCoverColors = ['red', 'orange', 'coral', 'brown', 'green']
        const randomCover = bookCoverColors[Math.floor(bookCoverColors.length * Math.random())]
        
        const book = document.createElement('div');
        book.classList.add('book');
        const bookTitle = document.createElement('p');
        bookTitle.classList.add('bookTitle');
        bookTitle.innerHTML = this.title;

        book.style.backgroundColor = randomCover;
        book.appendChild(bookTitle);
        return book;
    }
}