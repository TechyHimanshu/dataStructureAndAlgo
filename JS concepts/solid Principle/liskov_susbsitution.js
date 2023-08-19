// parent object is replaced by subclass object and that should not change the result the functionality should remain same


class Shape {
    area() {
      throw new Error('Method not implemented.');
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    area() {
      return this.side * this.side;
    }
  }
  
  // Function using the Shape class (Liskov Substitution Principle in action)
  function calculateArea(shape) {
    return shape.area();
  }

  
const rectangle = new Rectangle(5, 10);
const square = new Square(7);

console.log(calculateArea(rectangle)); // Output: 50 (5 * 10)
console.log(calculateArea(square));    // Output: 49 (7 * 7)
