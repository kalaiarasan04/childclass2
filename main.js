
// 4.Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.


class Book{
	
	constructor(title,author,publicationYear){
		
		this.title=title
		
		this.author=author
		
		this.publicationYear=publicationYear
		
	}
	
	booDetails(){
		
		document.write(`Book Title is : ${this.title}`)
		
		document.write("<br>");
		
		document.write(`Book author is : ${this.author}`);
		
		document.write("<br>");
		
		document.write(`Book publicationYear is : ${this.publicationYear}`);
		
		document.write("<br>");
		
		document.write("<br>");
		
	}
	
}

let book=new Book("Natpu","God",1998)

book.booDetails()

class Ebook extends  Book{
	
	constructor(title,author,year,price){
	
	super(title,author,year)
		
		this.price=price
		
	}
	
	bookPrice(){
		
		document.write(`Book Title is : ${this.title}`)
		
		document.write("<br>");
		
		document.write(`Book author is : ${this.author}`);
		
		document.write("<br>");
		
		document.write(`Book publicationYear is : ${this.publicationYear}`);
		
		document.write("<br>");
		
		document.write(`Book price is : ${this.price}`);
		
	}
	
}

let ebook=new Ebook("Fear","Yesu preveen",1995,500)

ebook.bookPrice()