//! Start by creating the variables for the data recorded
const day1TempF = 32
const day2TempC = 25
const day3TempF = 70 
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const celsiusToFahrenheit = (celsius) => {
    return(celsius * (9 / 5)) + 32;
};
const fahrenheitToCelsius = (fahrenheit) => {
    return(fahrenheit - 32) * (5 / 9);
};


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const convertedCelsius = celsiusTemps.map(fahrenheitToCelsius);
const convertedFahrenheit = fahrenheitTemps.map(celsiusToFahrenheit);

let tot_temperature_in_fahrenheit = day1TempF + celsiusToFahrenheit(day2TempC)+ day3TempF + celsiusToFahrenheit(day4TempC) + day5TempF + celsiusToFahrenheit(day6TempC) + day7TempF + celsiusToFahrenheit(day8TempC) + day9TempF + celsiusToFahrenheit(day10TempC) + day11TempF + celsiusToFahrenheit(day12TempC) + day13TempF + celsiusToFahrenheit(day14TempC) + day15TempF + celsiusToFahrenheit(day16TempC) + day17TempF + celsiusToFahrenheit(day18TempC) + day19TempF + celsiusToFahrenheit(day20TempC) + day21TempF + celsiusToFahrenheit(day22TempC) + day23TempF + celsiusToFahrenheit(day24TempC) + day25TempF +celsiusToFahrenheit(day26TempC) + day27TempF + celsiusToFahrenheit(day28TempC) + day29TempF + celsiusToFahrenheit(day30TempC);
let tot_temperature_in_celsius = fahrenheitToCelsius(day1TempF) + day2TempC + fahrenheitToCelsius(day3TempF) +day4TempC + fahrenheitToCelsius(day5TempF) + day6TempC + fahrenheitToCelsius(day7TempF) + day8TempC + fahrenheitToCelsius(day9TempF) + day10TempC +  fahrenheitToCelsius(day11TempF) + day12TempC + fahrenheitToCelsius(day13TempF) + day14TempC + fahrenheitToCelsius(day15TempF) + day16TempC + fahrenheitToCelsius(day17TempF) + day18TempC + fahrenheitToCelsius(day19TempF) + day20TempC + fahrenheitToCelsius(day21TempF) + day22TempC + fahrenheitToCelsius(day23TempF) + day24TempC + fahrenheitToCelsius(day25TempF) + day26TempC + fahrenheitToCelsius(day27TempF) + day28TempC + fahrenheitToCelsius(day29TempF) + day30TempC; 

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
//! Console.log the results for your own inspection if you'd like
console.log("Total in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total in Celsius:", tot_temperature_in_celsius);
console.log("Average in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average in Celsius:", avg_temperature_in_celsius)

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};