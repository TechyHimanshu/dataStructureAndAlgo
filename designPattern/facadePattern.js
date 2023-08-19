/**
 * The Facade pattern simplifies complex systems by providing a unified interface to a set of interfaces in a subsystem. 
 * Consider a practical example where you're building a home entertainment system with multiple components like a DVD player, projector, and sound system. 
 * You can use the Facade pattern to create a simplified interface for controlling the entire system.
 */

 class DVDPlayer {
    turnOn() {
      console.log('DVD Player: Turning On');
    }
  
    playMovie(movie) {
      console.log(`DVD Player: Playing ${movie}`);
    }
  }
  
  class Projector {
    turnOn() {
      console.log('Projector: Turning On');
    }
  
    displayOnScreen() {
      console.log('Projector: Displaying on the screen');
    }
  }
  
  class SoundSystem {
    turnOn() {
      console.log('Sound System: Turning On');
    }
  
    playAudio(audio) {
      console.log(`Sound System: Playing ${audio}`);
    }
  }
  
  class HomeTheaterFacade {
    constructor(dvdPlayer, projector, soundSystem) {
      this.dvdPlayer = dvdPlayer;
      this.projector = projector;
      this.soundSystem = soundSystem;
    }
  
    watchMovie(movie) {
      this.dvdPlayer.turnOn();
      this.projector.turnOn();
      this.projector.displayOnScreen();
      this.soundSystem.turnOn();
      this.soundSystem.playAudio(movie);
    }
  
    turnOff() {
      this.dvdPlayer.turnOff();
      this.projector.turnOff();
      this.soundSystem.turnOff();
    }
  }
  
  // Usage
  const dvdPlayer = new DVDPlayer();
  const projector = new Projector();
  const soundSystem = new SoundSystem();
  
  const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, soundSystem);
  
  homeTheater.watchMovie('Movie Title');
  homeTheater.turnOff();
  
  /**
   * In this example, the HomeTheaterFacade class provides a simple interface for controlling the entire home theater system, hiding the complexity of individual components. 
   * You can turn on the system, watch a movie, and turn it off with ease using the facade.
   */