// Chosen Selection Page
var selection = Cookies.get("techno");

var chosenAnswer = document.getElementById("selection-result");
chosenAnswer.innerHTML = selection;

function removeChoice() {
  var removeOption = document.getElementById("remove-button");
  var windowHome = window.open("options.html", "_self");
  Cookies.remove("techno");
}
