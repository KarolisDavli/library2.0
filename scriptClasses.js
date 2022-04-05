class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read  
  }
}

const bookshelf = document.querySelector('#bookshelf');
const libraryView = document.querySelector('#library-view')
const openFormButton = document.querySelector('#open-form-button');
const bookForm = document.querySelector('#book-form');
    
let library = [];


// Adding book to an array
function addBookToLibrary() {
  let titleInput = document.querySelector('#title').value;
  let authorInput = document.querySelector('#author').value;
  let pagesInput = document.querySelector('#pages').value;
  let readInput = document.querySelector('#read').checked;

  let newBook = new Book(titleInput, authorInput, pagesInput, readInput);
  library.push(newBook);
}

// Take user input & render library array to page
function renderBooks() {
  library.forEach((singleBook) => {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.setAttribute('id', library.indexOf(singleBook));
    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let bookRead = document.createElement('p');

    bookTitle.textContent = singleBook.title;
    bookAuthor.textContent = `Author: ${singleBook.author}`;
    bookPages.textContent = `Pages: ${singleBook.pages}`;
    bookRead.textContent = `Have you read it? ${singleBook.read}`;

    let removeBtn = renderRemove();
    let readBtn = renderRead(bookRead);
    bookCard.append(bookTitle, bookAuthor, bookPages, bookRead, removeBtn, readBtn);
    bookshelf.append(bookCard);
    libraryView.append(bookshelf);
  })
}

// Submit book button
bookForm.addEventListener('submit', submitNewBook)

function submitNewBook(e) {
  e.preventDefault()
  toggleForm();
  addBookToLibrary();
  clearContent()
  renderBooks();
  bookForm.reset();
}

function clearContent() {
  bookshelf.innerHTML = ''
}

// Open new book form
openFormButton.addEventListener('click', toggleForm)

function toggleForm() {
  if (bookForm.style.display === 'flex') {
    bookForm.style.display = 'none';
  } else {
    bookForm.style.display = 'flex';
  }
}

// Generate remove button
function renderRemove() {
  const removeButton = document.createElement('button');
  removeButton.addEventListener('click', removeBook);
  removeButton.textContent = 'Remove';
  return removeButton;
}

// Remove button event
function removeBook(e) {
  library.splice(e.target.parentElement.id, 1);
  bookshelf.removeChild(e.target.parentElement);
  clearContent();
  renderBooks();
}

// Generate read button
function renderRead() {
  const readButton = document.createElement('button');
  readButton.addEventListener('click', changeStatus);
  readButton.textContent = 'Read';
  return readButton;
}

function changeStatus(e) {
  let readKey = e.target.parentElement.childNodes[3];
  let parentID = e.target.parentElement.id;
  if (readKey.textContent == 'Have you read it? false') {
    library[parentID].read = true;
  } else {
    library[parentID].read = false;
  }
  clearContent();
  renderBooks();
}






