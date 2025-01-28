const convertToCelsius = function(fahr) {
  let celsius = (5/9)*(fahr-32)
  return Math.round(celsius*10)/10;
};

const convertToFahrenheit = function(celsi) {
  let fahr = (9/5)*(celsi)+32
  return Math.round(fahr*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
