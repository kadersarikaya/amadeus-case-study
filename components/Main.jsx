"use client"
import React, {useState, useEffect, useRef} from 'react';
import { airportsData } from '@/public/airportData';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useFlightSearchContext } from '../context/FlightContext';
import Link from 'next/link';

function FlightSearchForm() { 

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
    
    const [filteredDepartureAirports, setFilteredDepartureAirports] = useState([]);
    const [filteredArrivalAirports, setFilteredArrivalAirports] = useState([]);
    const departureInputRef = useRef(null);
    const arrivalInputRef = useRef(null);
    

    useEffect(() => {
        function handleOutsideClick(event) {
            if (
                departureInputRef.current &&
                !departureInputRef.current.contains(event.target)
            ) {
                setFilteredDepartureAirports([]);
            }
            if (
                arrivalInputRef.current &&
                !arrivalInputRef.current.contains(event.target)
            ) {
                setFilteredArrivalAirports([]);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleDepartureAirportChange = (event) => {
        const searchText = event.target.value;
        setDepartureAirport(searchText);

        // Filter matching departure airports
        const matches = airportsData.filter((airport) =>
            airport.name.toLowerCase().includes(searchText.toLowerCase()) ||
            airport.code.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredDepartureAirports(matches);
    };

    const handleArrivalAirportChange = (event) => {
        const searchText = event.target.value;
        setArrivalAirport(searchText);

        // Filter matching arrival airports
        const matches = airportsData.filter(
            (airport) =>
                airport.name.toLowerCase().includes(searchText.toLowerCase()) ||
                airport.code.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredArrivalAirports(matches);
    };

    const handleDepartureAirportSelect = (selectedAirport) => {
        setDepartureAirport(selectedAirport.name);
        setFilteredDepartureAirports([]);
    };

    const handleArrivalAirportSelect = (selectedAirport) => {
        setArrivalAirport(selectedAirport.name);
        setFilteredArrivalAirports([]);
    };

    const handleOneWayChange = () => {
        setOneWay(!oneWay);
        // Eğer oneWay seçiliyse arrivalDate'i sıfırla
        if (!oneWay) {
            setArrivalDate(null);
        }
    };

    return (
        <div className="p-8 bg-white rounded shadow-md relative ">
            <h2 className="text-xl text-gray-700 font-semibold mb-4">Flight Search</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="z-10 relative" ref = {departureInputRef} >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure Airport</label>
                    <input
                        type="text"
                        value={departureAirport}
                        onChange={handleDepartureAirportChange}
                        className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-cyan-400"
                        placeholder="Search Departure Airport"
                    />
                    <div className="mt-2 max-h-40 overflow-y-auto absolute shadow-lg bg-white border border-gray-300 rounded">
                        {filteredDepartureAirports.map((airport) => (
                            <div
                                key={airport.code}
                                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleDepartureAirportSelect(airport)}
                            >
                                {`${airport.name} - ${airport.city} - ${airport.code}`}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="z-10 relative" ref={arrivalInputRef} >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Arrival Airport</label>
                    <input
                        type="text"
                        value={arrivalAirport}
                        onChange={handleArrivalAirportChange}
                        className="border border-gray-300 px-3 z-100 py-2 w-full rounded focus:outline-none focus:border-cyan-400"
                        placeholder="Search Arrival Airport"
                    />
                    <div className="mt-2 max-h-40 overflow-y-auto absolute shadow-lg bg-white border border-gray-300 rounded">
                        {filteredArrivalAirports.map((airport) => (
                            <div
                                key={airport.code}
                                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleArrivalAirportSelect(airport)}
                            >
                                {`${airport.name} - ${airport.city} - ${airport.code}`}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 mt-4 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
                    <div className="md:z-10">
                        <DatePicker
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
                            minDate={new Date()} // Prevent selecting past dates
                            dateFormat="dd/MM/yyyy"
                            className="border relative border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-400"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Arrival Date</label>
                    <div className="md:z-10">
                        <DatePicker
                            selected={arrivalDate}
                            onChange={(date) => setArrivalDate(date)}
                            disabled={oneWay}
                            minDate={departureDate} // Prevent selecting dates before departure date
                            dateFormat="dd/MM/yyyy"
                            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-400"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">One Way</label>
                <input 
                    type="checkbox" 
                    className="ml-1"
                    checked={oneWay}
                    onChange={handleOneWayChange}
                />
            </div>
            <Link 
                href="/flightlist"
            >
                <button className="bg-cyan-400 text-white px-4 py-2 rounded mt-4 hover:bg-cyan-500">Search Flights</button>
            </Link>
        </div>
    );
}

function App() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <FlightSearchForm />
        </div>
    );
}

export default App;
