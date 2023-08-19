'use client'
import React, { createContext, useContext, useState } from 'react';

const FlightSearchContext = createContext();

export const useFlightSearchContext = () => useContext(FlightSearchContext);

export const FlightSearchProvider = ({ children }) => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [oneWay, setOneWay] = useState(true);

  const contextValue = {
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
  };

  return (
    <FlightSearchContext.Provider value={contextValue}>
      {children}
    </FlightSearchContext.Provider>
  );
};
