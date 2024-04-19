import { createSwitch } from "./utilityFuncitons.mjs";

export function createArticleCard(bookObject, id) {

  const articleCard = document.createElement("div");
  const removeBtn = document.createElement("button");
  const title = document.createElement("h1");
  const subTitle = document.createElement("div");
  const author = document.createElement("h3");
  const genre = document.createElement("h3");
  const legend = document.createElement("legend");
  const readToggle = createSwitch(bookObject.isRead);

  articleCard.classList.add("articleCard");
  removeBtn.classList.add("removeBtn");
  removeBtn.setAttribute("id", id);
  articleCard.setAttribute("id",id);
  subTitle.classList.add("sub-title");

  title.textContent = bookObject.title;
  author.textContent = bookObject.author;
  genre.textContent = bookObject.genre;
  removeBtn.textContent = "❌";
  legend.textContent = "Read:";

  articleCard.appendChild(removeBtn);
  articleCard.appendChild(title);
  subTitle.appendChild(author);
  subTitle.appendChild(genre);

  articleCard.appendChild(subTitle);
  articleCard.appendChild(legend);
  articleCard.appendChild(readToggle);

  return articleCard;
}
