const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num * 100) / 100;
}

function CelciusToFahrenheitAndKelvin() {
    const cTem = parseFloat(celciusInput.value);
    const fTem = (cTem * (9 / 5)) + 32;
    const kTem = cTem + 273.15;
    fahrenheitInput.value = roundNum(fTem);
    kelvinInput.value = roundNum(kTem);
}

function fahrenheitToCelciusAndKelvin() {
    const fTem = parseFloat(fahrenheitInput.value);
    const cTem = (fTem - 32) * 5 / 9;
    const kTem = (fTem + 459.67) * 5 / 9;
    celciusInput.value = roundNum(cTem);
    kelvinInput.value = roundNum(kTem);
}

function kelvinToCelciusAndFahrenheit() {
    const kTem = parseFloat(kelvinInput.value);
    const cTem = kTem - 273.15;
    const fTem = 9 / 5 * (kTem - 273) + 32;
    celciusInput.value = roundNum(cTem);
    fahrenheitInput.value = roundNum(fTem);
}

function main() {
    celciusInput.addEventListener('input', CelciusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}

main();