/**
 * The Decorator pattern is often used to add functionality to objects dynamically without changing their structure. 
 * Let's consider a practical example where we're building a notification system that allows us to send notifications in various ways: via email, SMS, and Slack. 
 * We'll use the Decorator pattern to add encryption and logging features to these notifications.
 */

// Base Notification class
class Notification {
    send(message) {
      return message;
    }
  }
  
  // Decorator for Encryption
  class EncryptionDecorator extends Notification {
    constructor(notification) {
      super();
      this.notification = notification;
    }
  
    send(message) {
      const encryptedMessage = this.encrypt(message);
      return this.notification.send(encryptedMessage);
    }
  
    encrypt(message) {
      // Add encryption logic here
      return `Encrypted: ${message}`;
    }
  }
  
  // Decorator for Logging
  class LoggingDecorator extends Notification {
    constructor(notification) {
      super();
      this.notification = notification;
    }
  
    send(message) {
      const loggedMessage = this.log(message);
      return this.notification.send(loggedMessage);
    }
  
    log(message) {
      console.log(`Logged: ${message}`);
      return message;
    }
  }
  
  // Usage
  const notification = new Notification();
  const encryptedNotification = new EncryptionDecorator(notification);
  const loggedAndEncryptedNotification = new LoggingDecorator(encryptedNotification);
  
  const message = "This is a secret message";
  
  console.log(loggedAndEncryptedNotification.send(message));
  