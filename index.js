/*
This assignment has definitely been the most challenging for me so far. Feels like I'm currently forcing my way through the conscious incompetence stage of learning, 
and it hasn't been easy. Throughout this assignment, I found myself wanting to do too much. Going into it, I may have felt a bit overconfident and thought I would be 
able to do more than I actually could. 

Although I wasn't able to add the extra functionality that I originally wanted to, overall, I'm still pretty happy with the final result. 
*/

/*
I instantiated a counter here, outside of the function, so that I could call it later to edit the innerHTML property of the DOM element that holds the visual 
representation of the total book count

I created
*/
let bookCount = 0
const collection = new Collection;

const addBookBtn = document.querySelector('.addBook');
addBookBtn.addEventListener('click', () => {
    const library = document.querySelector('.library')
    if (library.lastElementChild.lastElementChild.childElementCount < 35 && bookData.length > 0) {
        const book = new Book;
        book.getInfo();
        collection.arrOfBooks.push(book);
        bookNode = book.createBook();
        library.lastElementChild.lastElementChild.appendChild(bookNode);
        bookCount++;
    }
    else if (library.lastElementChild.lastElementChild.childElementCount >= 35 && bookData.length > 0) {
        const newBookshelf = document.createElement('div');
        newBookshelf.classList.add('bookshelf');
        const newBookshelfImg = document.createElement('img');
        newBookshelfImg.setAttribute('src', "assets/images/bookshelf.png");
        const newShelf = document.createElement('div');
        newShelf.classList.add('shelf');
        
        newBookshelf.append(newBookshelfImg, newShelf);
        library.appendChild(newBookshelf);
        console.log('You need a new bookshelf');
    }

    const bookCounter = document.querySelector('#bookCount');
    bookCounter.innerHTML = `Total Book Count: ${bookCount}`;
    console.log(collection);
})

const addAllBooksBtn = document.querySelector('.addAllBooks');
addAllBooksBtn.addEventListener('click', () => {
    while (bookData.length > 0) {
        const library = document.querySelector('.library')
        if (library.lastElementChild.lastElementChild.childElementCount < 35) {
            const book = new Book;
            book.getInfo();
            collection.arrOfBooks.push(book);
            bookNode = book.createBook();
            library.lastElementChild.lastElementChild.appendChild(bookNode);
            bookCount++;
            console.log(bookCount);
            console.log(collection);
        }
        else if (library.lastElementChild.lastElementChild.childElementCount >= 35) {
            const newBookshelf = document.createElement('div');
            newBookshelf.classList.add('bookshelf');
            const newBookshelfImg = document.createElement('img');
            newBookshelfImg.setAttribute('src', "assets/images/bookshelf.png");
            const newShelf = document.createElement('div');
            newShelf.classList.add('shelf');
            
            newBookshelf.append(newBookshelfImg, newShelf);
            library.appendChild(newBookshelf);
            console.log('You need a new bookshelf');
        }
        const bookCounter = document.querySelector('#bookCount');
        bookCounter.innerHTML = `Total Book Count: ${bookCount}`;
    }
    console.log(collection);
})