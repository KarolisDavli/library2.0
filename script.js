const libraryView = document.querySelector('#library-view');
const openBookButton = document.querySelector('#open-form-button');
const bookForm = document.querySelector('#book-form');
    
let library = [{
  title: 'HaPpy potter',
  author: 'Rawling',
  pages: 345,
  read: true
}, {
  title: 'Yo',
  author: 'What is this book',
  pages: 5,
  read: false
}];




function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.sayName = function() {
    return (`I am ${this.title}! I am best book ever`)
  }
}

const valdovas = new Book('LOTR', 'Talkien', 320, true)



// Render library array to page
function renderBooks() {
  library.forEach((singleBook) => {
    let bookCard = document.createElement('div');
    let bookTitle = document.createElement('h5');
    let bookAuthor = document.createElement('h6');
    let bookPages = document.createElement('p');
    let bookRead = document.createElement('p')
  
    bookTitle.innerText = singleBook.title;
    bookAuthor.innerText = singleBook.author;
    bookPages.innerText = singleBook.pages;
    bookRead.innerText = singleBook.read;
  
  
    bookCard.classList.add('book-card');
  
    bookCard.append(bookTitle, bookAuthor, bookPages, bookRead);
    libraryView.append(bookCard);
  })
}

// Open new book form
openBookButton.addEventListener('click', () => {
  if (bookForm.style.display === 'block') {
    bookForm.style.display = 'none';
  } else {
    bookForm.style.display = 'block';
  }
})