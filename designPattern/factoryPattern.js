// Factory
class AnimalFactory {
    createAnimal(type) {
      switch (type) {
        case 'Dog':
          return new Dog();
        case 'Cat':
          return new Cat();
        default:
          throw new Error('Invalid animal type');
      }
    }
  }
  
  // Products
  class Dog {
    sound() {
      return 'Woof';
    }
  }
  
  class Cat {
    sound() {
      return 'Meow';
    }
  }
  
  // Usage
  const factory = new AnimalFactory();
  const dog = factory.createAnimal('Dog');
  const cat = factory.createAnimal('Cat');
  
  console.log(dog.sound()); // Output: Woof
  console.log(cat.sound()); // Output: Meow
  