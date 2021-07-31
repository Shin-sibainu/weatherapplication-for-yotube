import { Api } from "./model/api.js"; 

export class App {
    mount() {
        const weatherInputElement = document.querySelector(".weather-input");
        const weatherFormElement = document.querySelector(".weather-form");
        weatherFormElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const weatherInputValue = weatherInputElement.value;
            console.log(weatherInputValue);

            const api = new Api();
            const weatherResultTextNode = document.querySelector(".weather-result-textnode");

            if(weatherResultTextNode === null){
                api.requestApi(weatherInputValue);
            }
            else {
                weatherResultTextNode.remove();
                api.requestApi(weatherInputValue);
            }

            weatherInputElement.value = "";
        })
    }
}