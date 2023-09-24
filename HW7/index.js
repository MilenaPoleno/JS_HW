class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    displayInfo() {
      console.log(`Вы выбрали книгу с названием "${this.title}", ее написал ${this.author} и в этой книге имеет количество ${this.pages} страниц.`);
    }
  }
  
const Book1 = new Book("Война и мир", "Лев Толстой", 1000);
Book1.displayInfo();
  
 
  
class Student {
constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grade: ${this.grade}`);
}
}
  
const student1 = new Student("John Smith", 16, "10th grade");
const student2 = new Student("Jane Doe", 17, "11th grade");
student1.displayInfo();
student2.displayInfo();