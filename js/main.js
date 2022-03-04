var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elList = document.querySelector(".list");

var add = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var elInputVal = elInput.value
  
    var list = {
        id: add.length+1,
        title: "." + elInputVal,
    };

    add.push(list);

    elList.innerHTML = "";

    for (var item of add ) {

        var newLi = document.createElement("li");

        newLi.textContent = item.id + item.title;

        elList.appendChild(newLi);

        elInput.value = ""
    };

});


