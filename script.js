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
  console.log(library);
}

// Render library array to page
function renderBooks() {
  library.forEach((singleBook) => {
    
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.setAttribute('id', `${library.indexOf(singleBook)}`);
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

// Submit book
bookForm.addEventListener('submit', submitNewBook)

function submitNewBook(e) {
  e.preventDefault()
  checkIfOpen();
  addBookToLibrary();
  clearContent()
  renderBooks();
  console.log('new book submited');
}

function clearContent() {
  bookshelf.innerHTML = ''
}

// // Open new book form
openFormButton.addEventListener('click', checkIfOpen)

// // Toggle book form
 function checkIfOpen() {
  if (bookForm.style.display === 'block') {
    bookForm.style.display = 'none';
  } else {
    bookForm.style.display = 'block';
  }
}

// let currentBook = library.indexOf(removeThisId);

// // Remove button event
function removeBook(e) {
  let removeThisId = document.getElementById(e.target.parentElement);
  console.log(e.target.parentElement);
  console.log(library.indexOf(removeThisId));
  // library.splice(e.target.parentElement.id, 1);
  
  // removeThisId.remove();
  // console.log(library);
  // console.log(removeThisId);
}




// // Generate remove button
function renderRemove() {
  const removeButton = document.createElement('button');
  removeButton.addEventListener('click', removeBook)
  removeButton.textContent = 'Remove';
  return removeButton;
}








