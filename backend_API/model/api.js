import { WeatherResultView } from "../view/WeatherResultView.js";
/* 25e5361f71bdade5113e8e97d6b73e40 */
export class Api {
    requestApi(inputValue) {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=25e5361f71bdade5113e8e97d6b73e40`

        fetch(API_URL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObj) => {
            const weatherResultview = new WeatherResultView();
            weatherResultview.createResultElement(jsonObj, inputValue);
        }) 
        .catch((e) => {
            alert("Enter the collect city name in English")
        })
    }
}