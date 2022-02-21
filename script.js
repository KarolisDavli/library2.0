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
  this.sayName = function() {
    return (`I am ${this.title}! I am best book ever`)
  }
}

const valdovas = new Book('LOTR', 'Talkien', 320, true)



// Render library array to page
function renderBooks() {
  library.forEach((singleBook) => {
    let bookCard = document.createElement('div');
    bookCard.classList.add(`${library.length}`);
    let bookTitle = document.createElement('h5');
    let bookAuthor = document.createElement('h6');
    let bookPages = document.createElement('p');
    let bookRead = document.createElement('p')
  
    bookTitle.textContent = singleBook.title;
    bookAuthor.textContent = singleBook.author;
    bookPages.textContent = singleBook.pages;
    bookRead.textContent = singleBook.read;
  
  
    bookCard.classList.add('book-card');

    let remove = renderRemove();


    bookCard.append(bookTitle, bookAuthor, bookPages, bookRead, remove);
    bookshelf.append(bookCard);
    libraryView.append(bookshelf);
  })
}


// Generate remove button
function renderRemove() {
  const removeButton = document.createElement('button');
  removeButton.addEventListener('click', removeBook)
  removeButton.textContent = 'Remove';
  return removeButton;
}

// Remove button event
function removeBook() {
  console.log('remove clicked');
  console.log(this);
}


// Toggle book form
 function checkIfOpen() {
  if (bookForm.style.display === 'block') {
    bookForm.style.display = 'none';
  } else {
    bookForm.style.display = 'block';
  }
}

// Open new book form
openFormButton.addEventListener('click', checkIfOpen)


// Submit book
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let authorInput = document.querySelector('#author').value;
  let titleInput = document.querySelector('#title').value;
  let pagesInput = document.querySelector('#pages').value;
  let readInput = document.querySelector('#read').checked;

  let newBook = new Book(authorInput, titleInput, pagesInput, readInput);
  
  renderBooks();
  checkIfOpen();
  
  library.push(newBook);
  console.log(library);
})

