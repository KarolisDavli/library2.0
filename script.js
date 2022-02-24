const bookshelf = document.querySelector('#bookshelf');
const libraryView = document.querySelector('#library-view')
const openFormButton = document.querySelector('#open-form-button');
const bookForm = document.querySelector('#book-form');
    
let library = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

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
    let bookTitle = document.createElement('h1');
    let bookAuthor = document.createElement('h2');
    let bookPages = document.createElement('p');
    let bookRead = document.createElement('p')

    bookTitle.textContent = singleBook.title;
    bookAuthor.textContent = singleBook.author;
    bookPages.textContent = singleBook.pages;
    bookRead.textContent = singleBook.read;

    let removeBtn = renderRemove();
    bookCard.append(bookTitle, bookAuthor, bookPages, bookRead, removeBtn);
    bookshelf.append(bookCard);
    libraryView.append(bookshelf);
  })
}

// Submit book button
bookForm.addEventListener('submit', submitNewBook)

function submitNewBook(e) {
  e.preventDefault()
  checkIfOpen();
  addBookToLibrary();
  clearContent()
  renderBooks();
}

function clearContent() {
  bookshelf.innerHTML = ''
}

// Open new book form
openFormButton.addEventListener('click', toggleForm)

function toggleForm() {
  if (bookForm.style.display === 'block') {
    bookForm.style.display = 'none';
  } else {
    bookForm.style.display = 'block';
  }
}

// Remove button event
function removeBook(e) {
  library.splice(e.target.parentElement.id, 1);
  bookshelf.removeChild(e.target.parentElement);
  clearContent();
  renderBooks();
}

// // Generate remove button
function renderRemove() {
  const removeButton = document.createElement('button');
  removeButton.addEventListener('click', removeBook)
  removeButton.textContent = 'Remove';
  return removeButton;
}








