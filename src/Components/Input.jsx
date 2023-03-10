import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { useState } from 'react'
import { toast } from 'react-toastify';
function Input({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");
  
  const handleSearchClick = () => {
    if (city !== '') setQuery({q:city})
  }

  const handleLocationClick = () =>{
    if(navigator.geolocation){
      toast.info("Fetching users location")
      navigator.geolocation.getCurrentPosition((position)=>{
        toast.success("Location fetched!")
        let lat = position.coords.latitude
        let lon = position.coords.longitude 
        setQuery({lat,lon})
      })
    }
  }

  const handleUnitsChange = (e) =>{
    const selectedUnits = e.currentTarget.name;
    if(units!==selectedUnits) setUnits(selectedUnits);
  }

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            value={city}
            onChange={(e)=>setCity(e.currentTarget.value)}
            type="text" 
            placeholder='Search city here...'
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
            />
            <UilSearch 
            size={25} 
            className='text-white cursor-pointer transition ease-out hover:scale-125'
            onClick={handleSearchClick} />
            <UilLocationPoint 
            size={25} 
            className='text-white cursor-pointer transition ease-out hover:scale-125'
            onClick={handleLocationClick} />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <p className='text-l text-white ml-6 mr-2'>Units</p>
            <button 
            name="metric" 
            className='text-xl text-white font-light transition ease-out hover:scale-125' 
             >°C</button>
            
        </div>
    </div>
  )
}

export default Input