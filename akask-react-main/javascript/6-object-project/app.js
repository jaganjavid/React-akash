// Book Constructor

function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn  = isbn;
}


function UI(){

    // Add Book to list

    UI.prototype.addBookToList = function(book){
       const list = document.querySelector("#book-list");

       // Create a tr element
       const row = document.createElement("tr");

       row.innerHTML =  `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>X</td>
       `;

       list.appendChild(row);

    }
}


// Event Listen for submit
document.getElementById("book-form").addEventListener("submit", function(e){
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    const ui = new UI();

    const book = new Book(title,author,isbn); // create a object

    // Validate
    if(title === "" || author === "" || isbn === ""){
        alert("Please fill the form");
    } else {
        ui.addBookToList(book);
    }
    
})