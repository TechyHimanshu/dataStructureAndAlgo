class Singleton {
  static instance
    constructor(param1, param2) {
      if (Singleton.instance) {
        return Singleton.instance;
      }
  
      this.param1 = param1;
      this.param2 = param2;
  
      Singleton.instance = this;
    }
    
    doSomething() {
      // perform some action using the parameters
      console.log(`Param1: ${this.param1}, Param2: ${this.param2}`);
    }
  }
  
  const singleton1 = new Singleton('foo', 'bar');
  const singleton2 = new Singleton('baz', 'qux');
  
  singleton1.doSomething(); // Output: Param1: foo, Param2: bar
  singleton2.doSomething(); // Output: Param1: foo, Param2: bar


  const Singleton2 = (function() {
    let instance;
  
    function createInstance() {
      // Your singleton logic here
      return {
        // Singleton methods and properties
        foo: 'bar',
        sayHello: function() {
          console.log('Hello!');
        }
      };
    }
  
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  // Usage
  const singletonInstance1 = Singleton2.getInstance();
  const singletonInstance2 = Singleton2.getInstance();

  console.log(singletonInstance1 === singletonInstance2); // Output: true
  singletonInstance1.sayHello(); // Output: Hello!
  console.log(singletonInstance1.foo); // Output: bar
  
  