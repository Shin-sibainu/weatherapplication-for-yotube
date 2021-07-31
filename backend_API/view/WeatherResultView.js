export class WeatherResultView {
    createResultElement = (jsonObj, inputValue) => {
        const weatherInfoOnly = jsonObj["weather"][0]["main"];
            const weatherResultSpan = document.createElement("span");
            const weatherTextNodeAll = `The weather in ${inputValue} is ${weatherInfoOnly} now.`
            const weatherResultTextNode = document.createTextNode(weatherTextNodeAll);
            weatherResultSpan.className = "weather-result-textnode"
            weatherResultSpan.appendChild(weatherResultTextNode);
            const weatherResultParentDiv = document.querySelector(".weather-result");
            weatherResultParentDiv.appendChild(weatherResultSpan);
    }
}