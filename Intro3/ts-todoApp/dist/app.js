"use strict";
let hi = "Hello world";
console.log(hi);
let footer = document.querySelector("footer");
let year = new Date().getFullYear();
footer.textContent = '&copy;' + year.toLocaleString();
