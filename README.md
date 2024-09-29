# Weather App
A simple React-based web application that allows users to search for current weather conditions in any city using the OpenWeatherMap API. The app displays information such as temperature, humidity, wind speed, and weather conditions represented by icons.

## Features
- City Search: Enter a city name or a state and view real-time weather data.
- Weather Details: Displays temperature, humidity, wind speed, and an appropriate weather icon.

## Technologies Used
- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [OpenWeatherMap](https://openweathermap.org/): Used for fetching real-time weather data.
- CSS: Custom styling for the app.

## Getting Started
### 1. Prerequisites
- [Node.js](https://nodejs.org/en) installed on your system.

### 2. Installation
1. Clone the repository:
```
git clone https://github.com/NguyenBichNgocLe/Weather-App.git
```
2. Navigate into the project directory:
```
cd Weather-App
```
3. Install dependencies:
```
npm install
```
4. Run the app:
```
npm start
```

### 3. Usage
1. Search for a city: 
    
    Type the name of the city into the input field and either press Enter or click the search icon.
2. View weather data: 

    After a valid city is entered, the app will display the current weather conditions, including temperature, humidity, wind speed, and a weather icon based on the current conditions.
3. Error handling: 

    If the city is invalid or not found, the app will alert you to enter a valid name.