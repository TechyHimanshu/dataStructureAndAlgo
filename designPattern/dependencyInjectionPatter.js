/**
 * Dependency Injection (DI) is a design pattern used in software engineering to achieve Inversion of Control (IoC). 
 * It's a technique where the dependencies required by a class or component are provided from the outside rather than being created internally. 
 * DI helps improve modularity, testability, and flexibility in your code.

In a DI scenario, a class doesn't create its dependencies; instead, 
they are injected or passed in from the outside. This decouples the class from its dependencies, 
making it more flexible and easier to test since you can easily substitute real dependencies with mock objects during testing.

*/
/**
 * Suppose you have a UserService class that requires a UserRepository for database operations. 
 * With dependency injection, you can pass the UserRepository as a parameter to the UserService constructor rather than having the UserService create it internally.
 */

 class UserRepository {
    constructor() {
      // Initialize database connection, etc.
    }
  
    save(user) {
      // Save user to the database
    }
  
    getById(userId) {
      // Retrieve user by ID from the database
    }
  }
  
  class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    createUser(name, email) {
      const user = { name, email };
      this.userRepository.save(user);
    }
  
    getUserById(userId) {
      return this.userRepository.getById(userId);
    }
  }
  
  // Usage
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  
  userService.createUser('John Doe', 'john@example.com');
  const user = userService.getUserById(1);
  console.log(user); // Display user details fetched from the database
  
  /**
   * In this example:

UserService has a constructor that takes a UserRepository as a parameter. It depends on UserRepository for database operations.

The UserRepository class is injected into the UserService instance when it's created.

When you create an instance of UserService, you also create an instance of UserRepository and pass it to UserService.

Benefits of Dependency Injection:

Decoupling: The UserService is not tightly coupled to a specific UserRepository implementation. You can easily replace it with a different repository (e.g., a mock for testing or a repository for a different database) without changing the UserService code.

Testability: During unit testing, you can inject mock or stub objects to isolate the component being tested. This allows for more focused and reliable unit tests.

Flexibility: You can configure and switch dependencies at runtime, making your application more configurable and adaptable.

Modularity: DI encourages a modular design where classes have well-defined dependencies, promoting separation of concerns and maintainability.

In summary, Dependency Injection is a powerful technique for managing dependencies in your software, promoting modularity, testability, and flexibility in your codebase. It's widely used in various programming languages and frameworks to build scalable and maintainable applications.
   */