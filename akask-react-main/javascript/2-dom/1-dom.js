// DOM - DOCUMENT OBJECT MODEL

let val;

val = document;
val = document.all;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;

val = document.forms;
val = document.forms[0].id;

val = document.links[1].className; // string
val = document.links[1].classList; // domtokenlist
val = document.links[1].classList[0];

val = document.images;
val = document.images[0];
val = document.images[0].src;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('integrity');

console.log(val);

// var arr = [1,2,3];
// console.log(arr[0]);