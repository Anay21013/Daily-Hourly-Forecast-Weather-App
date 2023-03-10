import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './Components/TopButtons';
import Input from './Components/Input';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getWeatherData from './Services/WeatherServices';
import getFormattedWeatherData from './Services/WeatherServices';
import { useEffect, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [query,setQuery] = useState({q:'Paris'})
  const [units,setUnits] = useState('metric')
  const [weather,setWeather] = useState(null)

  useEffect(()=>{
    const fetchWeather = async() => {
      const message = query.q ? query.q : "current location"
      toast.info("Fetching weather for " + message)
      await getFormattedWeatherData({...query,units}).then(
        (data)=>{
          toast.success('Successfully fetched weather for '+(data.name)+','+(data.country))
          setWeather(data);
          console.log(data);
        }
      );
      //console.log(weather)
    };
    fetchWeather();
  },[query,units]);

  const formatBackground = () =>{
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = 24;
    if(weather.temp - 273 <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700"
  }
  
  return (
    <div className={'mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 formatBackground'}>
      <TopButtons setQuery={setQuery}/>
      <Input setQuery={setQuery} units={setUnits}/>
      {weather && (
        <div>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>
          <Forecast title="hourly forecast" items={weather}/>
          <Forecast title="daily forecast" items={weather}/>
        </div>

        
      )}
      <ToastContainer autoClose={2000} theme='colored' newestOnTop={true} />
    </div>
  );
}

export default App;
