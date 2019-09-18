const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory")
document.body.appendChild(newHeader);
newHeader.innerHTML = 'Dan is the champion';
