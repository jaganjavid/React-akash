let val;

const today = new Date();

let birthDay = new Date("05-09-1996 11:20:0");


const months = ["January", "February", "March", 
"April", "May", "June", "July", "August", 
"September", "October", "November", "December"];

val = today.getMonth();
val = today.getDay();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthDay.setMonth(2);
birthDay.setDate(2);
birthDay.setFullYear(2000);
birthDay.setHours(5);
birthDay.setMinutes(5);
birthDay.setSeconds(7);



console.log(birthDay);
