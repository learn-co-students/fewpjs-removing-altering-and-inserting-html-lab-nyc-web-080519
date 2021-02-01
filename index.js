// My answers
// document.getElementById('main').remove();
// let newHeader = document.createElement('h1');
// newHeader.id = 'victory';
// let inner = newHeader.innerHTML = "YOUR-NAME is the champion"

// Solutions
// selects selector and removes it
document.querySelector("main#main").remove()

// create a new element and assign it to a variable, in this case newHeader
const newHeader = document.createElement("h1");
// we sed the id of newHeader to "victory"
newHeader.id = "victory";
// now we add the inner HTML
newHeader.innerHTML = "YOUR-NAME is the champion";
// now we need to set the classname to victory;
newHeader.className = "victory";

