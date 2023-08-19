/**
 * A practical example of the Adapter pattern in JavaScript is adapting a third-party API to work with your application. 
 * Suppose you have a third-party library that provides data in a format that doesn't directly match your application's requirements. 
 * You can use an adapter to bridge the gap between the two:
Let's say you have a third-party weather API that provides weather data in a format like this:
 */

const thirdPartyWeatherService = {
    fetchWeatherInfo() {
      // Simulated data from the third-party API
      return {
        temperature: 20,
        condition: 'sunny',
      };
    },
  };

  
  //But your application expects weather data in a different format:

  class WeatherProvider {
    getTemperature() {}
    getCondition() {}
  }
  
  class WeatherAdapter extends WeatherProvider {
    constructor(thirdPartyService) {
      super();
      this.thirdPartyService = thirdPartyService;
    }
  
    getTemperature() {
      const data = this.thirdPartyService.fetchWeatherInfo();
      return data.temperature;
    }
  
    getCondition() {
      const data = this.thirdPartyService.fetchWeatherInfo();
      return data.condition;
    }
  }

const weatherAdapter = new WeatherAdapter(thirdPartyWeatherService);
console.log(`Temperature: ${weatherAdapter.getTemperature()}°C`);
console.log(`Condition: ${weatherAdapter.getCondition()}`);

  /**
   * The WeatherAdapter acts as an intermediary that allows your application to work with the third-party weather service seamlessly by adapting its interface to match your application's requirements. 
   * This ensures that your application can use the third-party service without needing to modify its core logic to accommodate the different data format.
   */