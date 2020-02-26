//Inheritance: property/methods of one object are used by another object
class primate {
    constructor(name) {
        this.name = name;
    }
    primateInfo() {
        return (`The name of the primate is ${this.name}.`);
    }
}
class lemur extends primate {
    constructor(name, location) {
        super(name);
        this.location = location;
    }
    primateInfo() {
        return (`${super.primateInfo()} He/she is a lemur and they are from ${this.location}.`);
    }
}

let primate1 = new lemur("Murray", "Madagascar");
console.log(primate1.primateInfo());

//Abstraction: represents essential features hiding in background detail
function login(username, password) {
    let user = username;
    let pass = password;

    let restrict = function() {
        return (`Username: ${user}, Password: ${pass}`);
    }
    this.allow = function() {
        return (`Username: ${user}, Password: ${pass}`);
    }
}

let login1 = new login("JohnSmith", "topsecret");
console.log(login1.pass);
console.log(login1.restrict);
console.log(login1.allow());

//Encapsulation: putting the property and function in a single unit
class book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    addGenre(genre) {
        this.genre = genre;
    }
    bookInfo() {
        console.log(`The book titled ${this.title} is written by ${this.author}, has ${this.pages} pages, and is in the ${this.genre} genre.`);
    }
}

let book1 = new book("City of Bones", "Cassandra Clare", 544);
book1.addGenre("fantasy");
book1.bookInfo();
let book2 = new book("The Hunger Games", "Suzanne Collins", 384);
book2.addGenre("dystopian");
book2.bookInfo();