console.log("Index.js");
// constructor 
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
//display constructor
function Display() {

}
// add methods to display prototype 
Display.prototype.add = function (book) {
    console.log("adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `
<tr>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.type}</td>
</tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 1 || book.author.length < 1) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type) {
    let message=document.getElementById('message');
//     message.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
//                       <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//   </div> `
}




// add submit event listener to libraryForm 
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted library form')
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    // Python,C++,Javascript 
    let type;

    let Python = document.getElementById('Python');
    let language = document.getElementById('language');
    let JavaScript = document.getElementById('JavaScript');

    if (Python.checked) {
        type = Python.value;
    }
    else if (language.checked) {
        type = language.value;
    }
    else if (JavaScript.checked) {
        type = JavaScript.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success');
    }
    else {
        display.show('error');
        // show error  to the user 
    }


    display.add(book);



    e.preventDefault();
}