import React, { useState } from "react"



// function Weather() { 
    
//     const [weather, setWeather] = useState('sunny')
    
//     const [tempCelcius, setTempCelcius] = useState(27)
    
//     const handleWeatherChange = (newWeather, newTemp) => {
//         setWeather(newWeather)
//         setTempCelcius(newTemp)
//     }


//     return (
//         <div className='Weather componentBox'>
//             <h2>Today's Weather</h2>
//             <div>
//                 <strong>{weather}</strong> with a temp of
//                 {/* Child component to display temp -
//                 needs temp value as prop */}
//                 <Temperature temp={tempCelcius} units="C" />
//             </div>
//                 {/* Child component to update the weather -
//                 needs handler function as prop */}
//             <CheckWeather onWeatherChange={handleWeatherChange} />
//         </div>
//     )
// }

// Child component - receives parent state handler via props
// function CheckWeather(props) {
//     const weatherTypes = ['sunny', 'windy', 'raining', 'cloudy'];
//     // generates new random weather data and updates state via prop
//     const randomWeather = () => {
//     let newTemp = Math.floor(Math.random() * 40);
//     let newWeatherIndex = Math.floor(
//     Math.random() * weatherTypes.length);
//     // ++ try to destructure this function from the props object
//     props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp)
//     }
//     return (
//     <button onClick={randomWeather}>Check Weather</button>
//     )
//     }
//     // ++ Add some more weather types of your own
//     // Child component to display and convert temp if needed
//     function Temperature({temp, units = 'C'}) { // default to celcius
//     // convert to Fahrenheit if units is F (or not C)
//     let displayTemp = units === 'C' ? temp : (temp * 9/5) + 32
//     return (
//     <span class="Temperature">
//     <strong> {parseInt(displayTemp)}&deg;{units} </strong>
//     </span>
//     )
//     }
    // ++ Try adding a button to convert between C and F temps

    function Temperature ({ temp, units }) {
        return (
            <span>
                {temp} {units}
            </span>
        )
    }

function CheckWeather ({onWeatherChange}) {
    const handleButtonClick = () => {
        onWeatherChange("rainy", 18);
    };

    return (
        <button onClick={handleButtonClick}>Change Weather</button>
    );
}

function Weather() {
    const [weather, setWeather] = useState("sunny");
    const [tempCelsius, setTempCelsius] = useState(50);

    const handleWeatherChange = (newWeather, newTemp) => {
        setWeather(newWeather);
        setTempCelsius(newTemp);
    };

    return (
        <div className="Weather ComponentBox">
            <h2>Today's Weather</h2>

            <div><strong>{weather}</strong>with a temp of <br></br>
            <Temperature temp={tempCelsiu} units="C"/>
        </div>
    )
}



export default Weather;