
/* 
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

let myBook = new Book("L'Histoire de Tao", "Will Alexander", 250);

//Cette ligne crée l'objet suivant :


document.write(myBook.pages);
document.write(myBook.author);
document.write(myBook.title);

console.log(myBook.pages);
console.log(myBook.author);
console.log(myBook.title);

*/
////////


class film {
    constructor(title, real, duration) {
        this.title = title;
        this.real = real;
        this.duration = duration;
    }
}

let myfilms = new film ("Princesse Mononoké", "Shinkzi Wangfou", "90 minutes")
let myfilms1 = new film ("Battle Royal", "Takechi Kitano", "95 minutes")
let myfilms2 = new film ("Bohemian Rapsody", "Mickeal Bay", "120 minutes")

//J'arrive pas

//


console.log(myfilms.title);
console.log(myfilms.real);
console.log(myfilms.duration);

console.log(myfilms1.title);
console.log(myfilms1.real);
console.log(myfilms1.duration);

console.log(myfilms2.title);
console.log(myfilms2.real);
console.log(myfilms2.duration);


let myfilm1 = document.querySelector(".myfilms")
myfilm1.textContent =(myfilms.duration)

