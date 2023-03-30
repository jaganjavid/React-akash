class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    // Add Book to list
    addBookToList(book) {
        const list = document.querySelector("#book-list");

        // Create a tr element
        const row = document.createElement("tr");

        row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td class="delete">X</td>
        `;

        list.appendChild(row);
    }
    showAlert(message, className) {
        this.clearAlert();
        // Create Div
        const div = document.createElement("div");

        // Add Class 
        div.className = `alert ${className}`;

        // Add Text 
        div.appendChild(document.createTextNode(message));

        // Get Parent
        const container = document.querySelector(".container");

        // Get Form
        const form = document.querySelector("#book-form");

        // Insert alert
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector(".alert").remove();
            this.clearAlert();
        }, 3000)

    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.remove();
        }
    }

    clearField() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
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
        ui.showAlert("Please fill the fields", "alert-danger");
    } else {
        ui.addBookToList(book);
        ui.showAlert("Book Added", "alert-success");
        ui.clearField();
    }
    
})

// Delete event listener

document.querySelector("#book-list").addEventListener("click", function(e){
    e.preventDefault();

    if(e.target.className === "delete"){
        // Instantiate UI
        const ui = new UI();

        // Delete book
        ui.deleteBook(e.target);

        ui.showAlert("Book Removed", "alert-success");
    }
})