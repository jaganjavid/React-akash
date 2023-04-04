// document.getElementsByClassName();


const items = document.getElementsByClassName("collection-item"); // HTML COLLECTION

// const tagItems = document.getElementsByTagName("");
// items[0].style.color = "blue";
// items[0].textContent = "Jagan";

// Convert to array

// let lists = Array.from(items);

// lists.forEach(function(element, index, arr){
//     element.style.color = "blue"
//     console.log(`${element.textContent} - ${index}`);
//     console.log(arr);
// })

// for(let i = 0; i<items.length; i++){
//    items[i].style.color = "blue";
//    items[i].textContent = "blue";
// }


// const arr = [1,2,3,4,5];

// arr.forEach(function(number){
//   console.log(number);
// })

// arr.push(6);

// console.log(arr);

// document.querySelectorAll();

const listItems = document.querySelectorAll("li"); // nodelist


listItems.forEach(function(element,index){
  element.style.color = "blue";
  console.log(element.textContent);
  console.log(index);
})