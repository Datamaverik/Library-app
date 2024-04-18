export function filteredGenre(btnId) {
  if (btnId === "fictionBtn") return "Fiction";
  if (btnId === "nonFictionBtn") return "Non Fiction";
  if (btnId === "comicBtn") return "Comic";
  if (btnId === "horrorBtn") return "Horror";
  if (btnId === "allGenres") return "allGenres";
}


export function fiteredBook(book,genre){
    if(genre==='allGenres' || genre===undefined){
        return book;
    }
    const newBook = book.filter((b)=>{
        return b.genre===genre
    })
    return newBook;
}


export function createSwitch(checked){
    const Switch = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type='checkbox';
    if(checked)checkbox.checked=true;
    const sliderRound = document.createElement('span');

    Switch.classList.add('switch');
    checkbox.classList.add('checkbox');
    sliderRound.classList.add('slider');
    sliderRound.classList.add('round');

    Switch.appendChild(checkbox);
    Switch.appendChild(sliderRound);

    return Switch;
}

export function remBooks(book, removeBtns, article){

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