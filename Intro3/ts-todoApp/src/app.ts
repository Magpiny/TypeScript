let hi: string = "Hello world";
console.log(hi);
let footer = document.querySelector("footer") as HTMLElement;

let year: number = new Date().getFullYear();
footer.textContent = '&copy;'+year.toLocaleString();





