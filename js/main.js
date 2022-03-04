var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elList = document.querySelector(".list");

var add = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
  
    var list = {
        id: add.length,
        title: elInput.value,
    };

    add.push(list.title);

    elList.innerHTML = "";

    for (var item of add ) {

        var newText = document.createElement("li");

        newText.textContent = item;

        elList.appendChild(newText);

        elInput.value = ""
    };

});


