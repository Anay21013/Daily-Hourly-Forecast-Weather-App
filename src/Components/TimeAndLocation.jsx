import React from 'react'
import { formatToLocalTime} from '../Services/WeatherServices'

function TimeAndLocation({weather : {dt,city,name,country}}) {
    //console.log(city.timezone)
    return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                {formatToLocalTime(dt,city.timezone/60)}
                
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                {name},{country}
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation