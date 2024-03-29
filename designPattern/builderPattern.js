// Builder Interface
/**
 * The Builder pattern separates the construction of a complex object from its representation, 
 * allowing you to create different representations of an object using the same construction process. 
 * It involves a Director that orchestrates the construction via a Builder interface
 */

class BurgerBuilder {
    constructor() {
      this.burger = new Burger();
    }
    
    addPatty() {}
    addCheese() {}
    addLettuce() {}
    addTomato() {}
    build() {
      return this.burger;
    }
  }
  
  // Concrete Builder
  class VeggieBurgerBuilder extends BurgerBuilder {
    addPatty() {
      this.burger.add('Veggie Patty');
      return this;
    }
    
    addLettuce() {
      this.burger.add('Lettuce');
      return this;
    }
    
    build() {
      return this.burger;
    }
  }
  
  // Product
  class Burger {
    constructor() {
      this.ingredients = [];
    }
    
    add(ingredient) {
      this.ingredients.push(ingredient);
    }
    
    describe() {
      return `Burger with: ${this.ingredients.join(', ')}`;
    }
  }
  
  // Director
  class Waiter {
    constructor(builder) {
      this.builder = builder;
    }
    
    construct() {
      return this.builder
        .addPatty()
        .addLettuce()
        .build();
    }
  }
  
  // Usage
  const veggieBurgerBuilder = new VeggieBurgerBuilder();
  const waiter = new Waiter(veggieBurgerBuilder);
  const burger = waiter.construct();
  
  console.log(burger.describe()); // Output: Burger with: Veggie Patty, Lettuce
  