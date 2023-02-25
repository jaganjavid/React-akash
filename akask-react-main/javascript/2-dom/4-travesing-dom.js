let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector(".collection-item:last-child");

val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[2].nodeName;
val = list.childNodes[2].nodeType;

// 1 - Element
// 2 - Attr
// 3 - Text Node
// 8 - Comment

// Get the childern element nodes

val = list.children; // ***
val = list.children[0];
val = list.children[1];
val = list.children[1].textContent;
val = list.children[0].children[0];
val = list.children[0].children[0].className;

// FirstChild
val = list.firstChild;
val = list.firstElementChild;

// LastChild
val = list.lastChild;
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get Parent Node
val = list.parentNode;
val = list.parentElement.parentElement; // ***

// Get pervious sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

console.log(val);