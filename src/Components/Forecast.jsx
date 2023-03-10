import React from 'react'
import { formatToLocalTime, iconUrlFromCode } from '../Services/WeatherServices'

function Forecast({title,items}) {
    //console.log(items.list[1].weather[0].icon)
    if (title=="hourly forecast"){
        return (
            <div>
                <div className='flex items-center justify-start mt-6'>
                    <p className='text-white font-medium uppercase'>{title}</p>
                </div>
                <hr className='my-2'/>
                <div className='flex flex-row items-center justify-between text-white'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                            {formatToLocalTime(items.list[1].dt,items.city.timezone/60,"hh:mm a")}
                        </p>
                        <img src={iconUrlFromCode(items.list[1].weather[0].icon)} className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[1].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
        
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                            {formatToLocalTime(items.list[3].dt,items.city.timezone/60,"hh:mm a")}
                        </p>
                        <img src={iconUrlFromCode(items.list[3].weather[0].icon)} className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[3].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
        
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                        {formatToLocalTime(items.list[4].dt,items.city.timezone/60,"hh:mm a")}
                        </p>
                        <img src={iconUrlFromCode(items.list[4].weather[0].icon)} className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[4].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
        
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                        {formatToLocalTime(items.list[6].dt,items.city.timezone/60,"hh:mm a")}
                        </p>
                        <img src={iconUrlFromCode(items.list[6].weather[0].icon)} className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[6].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
        
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                        {formatToLocalTime(items.list[7].dt,items.city.timezone/60,"hh:mm a")}
                        </p>
                        <img src={iconUrlFromCode(items.list[7].weather[0].icon)} className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[7].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
                </div>
            </div>
          )
    }
    if (title=="daily forecast"){
        return (
            <div>
                <div className='flex items-center justify-start mt-6'>
                    <p className='text-white font-medium uppercase'>{title}</p>
                </div>
                <hr className='my-2'/>
                <div className='flex flex-row items-center justify-between text-white'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                        {formatToLocalTime(items.list[4].dt,items.city.timezone/60,"cccc")}
                        </p>
                        <img src={iconUrlFromCode(items.list[4].weather[0].icon)} className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[4].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
        
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                        {formatToLocalTime(items.list[12].dt,items.city.timezone/60,"cccc")}
                        </p>
                        <img src={iconUrlFromCode(items.list[12].weather[0].icon)}className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[12].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
        
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                        {formatToLocalTime(items.list[20].dt,items.city.timezone/60,"cccc")}
                        </p>
                        <img src={iconUrlFromCode(items.list[20].weather[0].icon)}className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[20].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
        
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                        {formatToLocalTime(items.list[28].dt,items.city.timezone/60,"cccc")}
                        </p>
                        <img src={iconUrlFromCode(items.list[28].weather[0].icon)} className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[28].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
        
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>
                        {formatToLocalTime(items.list[36].dt,items.city.timezone/60,"cccc")}
                        </p>
                        <img src={iconUrlFromCode(items.list[36].weather[0].icon)} className='w-12 my-1' alt=""/>
                        <p className='font-medium'>{(items.list[36].main.temp-273).toFixed()+'°'}</p>
                        
                    </div>
                </div>
            </div>
          )
    }
  
}

export default Forecast