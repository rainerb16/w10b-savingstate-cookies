// Chosen Selection Page
var selection = Cookies.get("techno");
var chosenAnswer = document.getElementById("selection-result");
chosenAnswer.innerHTML = selection;

if(chosenAnswer.innerHTML === "undefined") {
    chosenAnswer.innerHTML = "<h3>Oops, there was no choice made!<br> Please start again and select a genre.<h3>";
}

function removeChoice() {
  var removeOption = document.getElementById("remove-button");
  var windowHome = window.open("options.html", "_self");
  Cookies.remove("techno");
}
