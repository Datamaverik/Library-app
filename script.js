import { createArticleCard } from "./src/articleCard.mjs";
import { uniqueIdGenerator } from "./src/uniqueIdGenerator.mjs";
import { filteredGenre, fiteredBook} from "./src/utilityFuncitons.mjs";

const article = document.querySelector(".article");

const addBookButton = document.querySelector(".addBookButton");
const favDialog = document.getElementById("favDialog");
const submitBtn = document.getElementById("submitBtn");
const sidebarCard = document.querySelectorAll(".sidebarCard");

const title = document.getElementById("title");
const author = document.getElementById("author");
const genre = document.getElementById("genre");
const isRead = document.getElementById("isRead");

//Buffer array given to render something on the window and not keep it empty when the user visits
let book = [
  {
    id: 0,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Fiction",
    isRead: true,
  },
  {
    id: 1,
    title: "A Suitable Boy",
    author: "Vikram Seth",
    genre: "Non Fiction",
    isRead: false,
  },
  {
    id: 2,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Horror",
    isRead: false,
  },
  {
    id: 3,
    title: "Solo Leveling",
    author: "Chugong",
    genre: "Comic",
    isRead: true,
  },
  {
    id: 4,
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fiction",
    isRead: false,
  },
  {
    id: 5,
    title: "The Naked and the Undead",
    author: "Cynthia Freeland",
    genre: "Horror",
    isRead: false,
  },
];

//addBooks() called once when the window is loaded or the page is refreshed.
window.onload = addBooks(article);

//Opens the dialog box to enter the details of the book you're reading
addBookButton.addEventListener("click", () => {
  favDialog.showModal();
});

//Gets the enetered values in the dialog and add the articleCard in the article section
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newBook = {
    id: book.length,
    title: title.value,
    author: author.value,
    genre: genre.value,
    isRead: isRead.checked,
  };

  console.log(newBook);
  book.push(newBook);

  const articleCard = createArticleCard(newBook);
  article.appendChild(articleCard);
  favDialog.close();

  //addBooks() called when submitting form
  book = addBooks(article);
  console.log(book);
});

//updates the id in the elements and creates the articleCard and renders them on the window
function addBooks(article) {
  article.innerHTML = "";

  book.map((b) => {
    const id = uniqueIdGenerator();
    b.id = id;
    article.appendChild(createArticleCard(b, id));
  });

  const removeBtns = document.querySelectorAll(".removeBtn");

  Array.from(removeBtns).forEach((button) => {
    button.addEventListener("click", (event) => {
      const searchid = event.target.getAttribute("id");
        console.log(searchid);
      const c = document.getElementById(searchid);
      console.log(c);
      article.removeChild(c);

      const indexTorem = parseInt(searchid);
      console.log(indexTorem);

      book = book.filter((item) => parseInt(item.id) !== indexTorem);
      console.log(book);
    });
  });
  return book;
}

//Renders filtered books according to the selected genre
Array.from(sidebarCard).forEach((card) => {
  card.addEventListener("click", (e) => {
    const clickedBtnId = e.target.getAttribute("id");
    const Genre = filteredGenre(clickedBtnId);
    const newBook = fiteredBook(book, Genre);

    //this will render the newly filtered list of books
    article.innerHTML = "";
    newBook.map((b) => {
      const id = uniqueIdGenerator();
      b.id = id;
      article.appendChild(createArticleCard(b, id));
    });

    const removeBtns = document.querySelectorAll(".removeBtn");

    Array.from(removeBtns).forEach((button) => {
      button.addEventListener("click", (event) => {
        const searchid = event.target.getAttribute("id");
        console.log(searchid);
        const c = document.getElementById(searchid);
        console.log(c);
        article.removeChild(c);

        const indexTorem = parseInt(searchid);
        console.log(indexTorem);

        book = book.filter((item) => parseInt(item.id) !== indexTorem);
        console.log(book);
      });
    });
  });
});

//To update the isRead property of the objects according to the user's choice
article.addEventListener("change", (e) => {
  const checkbox = e.target;
  if (checkbox.type === "checkbox" && checkbox.closest(".articleCard")) {
    const cardId = checkbox.closest(".articleCard").getAttribute("id");
    book.map((b) => {
      if (b.id === cardId) {
        b.isRead = checkbox.checked;
      }
    });
    console.log(cardId);
  }
});