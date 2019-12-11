var input = document.querySelectorAll("input");
var submitButton = document.getElementById("submit");
var addDiv = document.querySelector(".add-container");
var mainDiv = document.querySelector(".main");
var delButton = document.querySelectorAll(".del");


submitButton.addEventListener("click", function() {
    if(input[0].value != "" && input[1].value != "" && input[2].value != "") {
        addContent();
    }
    else {
        console.log("Empty");
    }
});

function changeDelButton(delButton) {
    for(var i = 0; i < delButton.length; i++) {
        delButton[i].addEventListener("click", function() {
            this.parentElement.remove();
            removeToBook();
        });
    }  
}

function addContent() {
    var div = document.createElement("div");
    var button = document.createElement("button");

    div.classList.add("add-container");
    button.classList.add("del");

    button.textContent = "X";


    for(var i = 0; i < 3; i++) {
        var h4 = document.createElement("h4");
        if(input[i].value.length > 10) {
            h4.textContent = input[i].value.substring(0, 9) + "..";
        }
        else {
            h4.textContent = input[i].value;
        }
        div.appendChild(h4);
        input[i].value = "";
    }

    div.appendChild(button);
    console.log(div);
    mainDiv.appendChild(div);

    addToBook(); 

    var delButton = document.getElementsByClassName("del");
    changeDelButton(delButton);
}

function addToBook() {
    var addBook = document.getElementById("add-book");
    addBook.classList.toggle("added-book");
    setTimeout(function() {
        addBook.classList.toggle("added-book");
    }, 3000);
}

function removeToBook() { 
    var removeBook = document.getElementById("remove-book");
    removeBook.classList.toggle("removed-book");
    setTimeout(function() {
        removeBook.classList.toggle("removed-book");
    }, 3000);
}