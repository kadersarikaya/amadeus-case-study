'use client'
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import { useFlightSearchContext } from '../../context/FlightContext';
import axios from 'axios';

const FlightList = () => {

  const [sortType, setSortType] = useState('ascending');
  const [flightTime, setFlightTime] = useState();
  const [duration, setDuration] = useState();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const convertTimeTo24HourFormat = (time) => {
    const [hour, period] = time.split(' ');
  let hourValue = parseInt(hour);
  
  if (period === 'PM' && hourValue < 12) {
    hourValue += 12;
  } else if (period === 'AM' && hourValue === 12) {
    hourValue = 0;
  }
  
  const hourString = hourValue.toString().padStart(2, '0');
  return `${hourString}:00`;
};

  const getSortedFlights = (flights) => {
  let sortedFlights = [...flights];

    if (sortType === 'ascending') {
      sortedFlights.sort((a, b) => a.price - b.price)
    } else if (sortType === 'descending') {
      sortedFlights.sort((a, b) => b.price - a.price);
    }
    if (flightTime) {
      sortedFlights = filterFlightsByTime(flightTime, sortedFlights);
    }

    if (duration) {
      sortedFlights = filterFlightsByDuration(duration, sortedFlights);
    }
    return sortedFlights;
  };

 const {
    departureAirport,
    setDepartureAirport,
    arrivalAirport,
    setArrivalAirport,
    departureDate,
    setDepartureDate,
    arrivalDate,
    setArrivalDate,
    oneWay,
    setOneWay,
  } = useFlightSearchContext();

  const filterFlightsByTime = (flightTime, flights) => {
    const [startTime, endTime] = flightTime.split('-').map(time => time.trim());
    const [startHour] = startTime.split(':').map(hour => parseInt(hour));
    const [endHour] = endTime.split(':').map(hour => parseInt(hour));

    return flights.filter(flight => {
      const departureHour = parseInt(flight.departureTime.split(':')[0]);
      return departureHour >= startHour && departureHour <= endHour;
    });
  };

  const filterFlightsByDuration = (duration, flights) => {
    const [minDuration, maxDuration] = duration.split('-').map(time => parseInt(time));
    return flights.filter(flight => {
      return flight.duration >= minDuration && flight.duration <= maxDuration;
    });
  };

    const availableFlightList = () => {
      if(departureAirport && arrivalAirport) {
        const sortedFlights =  getSortedFlights(flights)
        .filter(flight => 
          flight.departureAirport === departureAirport && 
          flight.arrivalAirport === arrivalAirport
          );
            return sortedFlights.length > 0
        ? sortedFlights.map(flight => ({
            ...flight,
            duration: parseInt(flight.duration),// duration'ı integer'a çevir
            departureTime: convertTimeTo24HourFormat(flight.departureTime),
            arrivalTime: convertTimeTo24HourFormat(flight.arrivalTime),
          }))
        : [];
      }
        return []
    }

  useEffect(() => {
     const fetchFlights = async () => {
       try {
        const res = await axios.get('https://kadersarikaya.github.io/Data/flights.json');
        const flightsData = await res.data;
        setFlights(flightsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching flights:', error);
        setLoading(false);
      }
    };
    fetchFlights();
  }, []);


  console.log(oneWay);

  return (
    <>
    <Navbar />
      <div className="mx-auto w-full p-5 mt-20 ">
        {/* Filter  */}
        <div className="text-gray-700 mb-20 border border-gray-200 rounded-md">
          <div className="border border-gray-200 rounded-sm"></div>
          <div className="bg-gray-50 text-blue-500 p-2 text-lg font-semibold">Filter</div>
          <div className="grid grid-cols-3">
            <div className="relative overflow-hidden hover:bg-gray-50">
                <div className="p-4">
                  <label htmlFor="maxFlightTime" className="flex mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" color="gray
                      " stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                     <p className="ml-2">Ticket Price</p>
                  </label>
                  <select
                    id="maxFlightTime"
                    className="w-full border border-gray-300 rounded-md p-1"
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                  >
                    <option value="ascending">Ascending</option>
                    <option value="descending">
                      Descending
                    </option>
                    {/* ... other flight duration options ... */}
                  </select>
                </div>
            </div>
            <div className="relative overflow-hidden hover:bg-gray-50">
                <div className="p-4">
                  <label htmlFor="maxFlightTime" className="flex mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" color="gray" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg> 
                  <p className="ml-2">Departure / Arrival Time:</p>
                  </label>
                  <select
                    id="maxFlightTime"
                    className="w-full border border-gray-300 rounded-md p-1"
                    value={flightTime}
                    onChange={(e) => setFlightTime(e.target.value)}
                  >
                    <option value="00:00 - 06:00">
                      00:00 - 06:00
                    </option>
                    <option value="06:00 - 12:00">
                      06:00 - 12:00
                    </option>
                    <option value="12:00 - 18:00">
                      12:00 - 18:00
                    </option>
                    <option value="18:00 - 22:00">
                      18:00 - 22:00
                    </option>
                  </select>
                </div>
            </div>
            <div className="relative overflow-hidden hover:bg-gray-50">
                <div className="p-4">
                  <label htmlFor="maxFlightTime" className="flex mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" color="gray" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> <p className="ml-2">Flight Duration:</p>
                  </label>
                  <select
                    id="maxFlightTime"
                    className="w-full border border-gray-300 rounded-md p-1"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    <option value="0-2">
                      0 - 2 hours
                    </option>
                    <option value="2-4">
                      2 - 4 hours
                    </option>
                    <option value="4-6">
                      4 - 6 hours
                    </option>
                    {/* ... other flight duration options ... */}
                  </select>
                </div>
            </div>
          </div>
        </div>
        {loading ? (
          <p>Loading flights...</p>
        ) : (
        <>
          <div className="">
          {availableFlightList().map(flight => (
            <div key={flight.id}  className={`grid ${oneWay ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
          {/* Departure */}
            <div className="border rounded-md mb-10 border-gray-200">
                <div className="text-gray-50 rounded-b-none rounded-md bg-slate-400 text-center p-2 text-lg font-semibold">
                  <p>Departure</p>
                  <p className="text-xs">
                    {departureDate?.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p> 
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 ">
                  <div className="pl-5 pt-3">
                    <p>Airline</p>
                    <div className="flex pt-3">
                      <div className="text-xs font-semibold mr-1">
                        {flight.departureCode}
                      </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      <div className="ml-1 text-xs font-semibold">
                        {flight.arrivalCode}
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p>Departure ✈️</p>
                    <div className="">
                      <div className="pt-3 flex">
                        <p className="font-semibold">
                          {flight.departureTime}  
                        </p> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <p className="text-sm">
                          {flight.arrivalTime}
                        </p>
                      </div>
                      <div className="flex pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" color="gray" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> 
                        <p className="text-xs">
                          {flight.duration} hours
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p>Price</p>
                    <p className="pt-3" >
                      <span className="text-2xl font-semibold">
                        {flight.price}
                      </span>
                      <span className="text-sm">TL</span>
                    </p>
                  </div>
                  <div className="mt-3 p-3">
                      <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-md">
                        Select
                      </button>
                  </div>
                </div>
                <div className="relative overflow-hidden ">
                  <input className="absolute top-0 inset-x-0 w-full h-12 
                  opacity-0 z-10 cursor-pointer peer"
                  type="checkbox" />
                  <div className="h-12 w-full pl-5 flex items-center">
                    <p>Flight Details</p>
                  </div>
                  <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-white border border-gray-300 flex items-center justify-center
                  text-gray transition-transform duration-500 
                  rotate-0 peer-checked:rotate-180
                  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  <div className="bg-gradient-to-t from-slate-200 overflow-hidden 
                  transition-all duration-500 max-h-0 peer-checked:max-h-40">
                    <div className="p-4 text-sm text-gray-700">
                        <p className="p-1">{`${flight.airline}: TK7265 Class: O`}</p>
                        <div>
                          <div className="flex p-1">
                            <img width="20" height="20" src="./departure.png" />
                            <p className="pl-3">
                              {flight.departureTime} {flight.departureDate} {flight.departureAirport} ({flight.departureCode})
                            </p>
                          </div>
                          <div className="flex p-1">
                            <img width="20" height="20" src="./arrival.png" alt="" />
                            <p className="pl-3">
                              {flight.arrivalTime} {flight.arrivalDate} {flight.arrivalAirport} ({flight.arrivalCode})
                            </p>
                          </div>
                        </div>
                        <div className="text-xs p-1">
                        🍽️ Food and drink are not included in the price.
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            {/* Return */}
          {/* <div className="">Return</div> */}
          {!oneWay &&  
           <div className="border rounded-md mb-10 ml-3 border-gray-200">
                <div className="text-gray-50 rounded-b-none rounded-md bg-slate-400 text-center p-2 text-lg font-semibold">
                  <p>Return</p>
                  <p className="text-xs">
                    {arrivalDate?.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </p> 
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 ">
                  <div className="pl-5 pt-3">
                    <p>Airline</p>
                    <div className="flex pt-3">
                      <div className="text-xs font-semibold mr-1">
                        {flight.arrivalCode}
                      </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      <div className="ml-1 text-xs font-semibold">
                        {flight.departureCode}
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p>Departure ✈️</p>
                    <div className="">
                      <div className="pt-3 flex">
                        <p className="font-semibold">
                          {flight.departureTime} + 7   
                        </p> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <p className="text-sm">
                          {flight.arrivalTime} + 7
                        </p>
                      </div>
                      <div className="flex pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" color="gray" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> 
                        <p className="text-xs">
                          {flight.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p>Price</p>
                    <p className="pt-3" >
                      <span className="text-2xl font-semibold">
                        {flight.price}
                      </span>
                      <span className="text-sm">TL</span>
                    </p>
                  </div>
                  <div className="mt-3 p-3">
                      <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-md">
                        Select
                      </button>
                  </div>
                </div>
                <div className="relative overflow-hidden ">
                  <input className="absolute top-0 inset-x-0 w-full h-12 
                  opacity-0 z-10 cursor-pointer peer"
                  type="checkbox" />
                  <div className="h-12 w-full pl-5 flex items-center">
                    <p>Flight Details</p>
                  </div>
                  <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-white border border-gray-300 flex items-center justify-center
                  text-gray transition-transform duration-500 
                  rotate-0 peer-checked:rotate-180
                  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  <div className="bg-gradient-to-t from-slate-200 overflow-hidden 
                  transition-all duration-500 max-h-0 peer-checked:max-h-40">
                    <div className="p-4 text-sm text-gray-700">
                        <p className="p-1">Anadolujet Flight: TK7265 Class: O</p>
                        <div>
                          <div className="flex p-1">
                            <img width="20" height="20" src="./departure.png" />
                            <p className="pl-3">
                              {flight.arrivalTime + 7} {flight.arrivalDate} {flight.arrivalAirport} ({flight.arrivalCode})
                            </p>
                          </div>
                          <div className="flex p-1">
                            <img width="20" height="20" src="./arrival.png" alt="" />
                            <p className="pl-3">
                              {flight.departureTime + 7} {flight.departureDate} {flight.departureAirport} ({flight.departureCode})
                            </p>
                          </div>
                        </div>
                        <div className="text-xs pt-1">
                        🍽️ Food and drink are not included in the price.
                        </div>
                    </div>
                  </div>
              </div>
            </div>}
            </div>
           ))}
          </div>
          {availableFlightList().length > 0 ? (
          availableFlightList().map(flight => (
          <div key={flight.id}>
          {/* Uçuş bilgilerini göster */}
        </div>
          ))
        ) : (
          <p className="text-center text-red-500 font-semibold" >No flights available</p>
        )}
        </>
        )}
      </div>
    </>
  );
};

export default FlightList;


