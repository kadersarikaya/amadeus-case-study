export const airportsData = [
    { code: 'IST', name: 'Istanbul Atatürk Airport', city: 'Istanbul' },
    { code: 'LHR', name: 'London Heathrow Airport', city: 'London' },
    { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris' },
    { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt' },
    { code: 'AMS', name: 'Amsterdam Airport Schiphol', city: 'Amsterdam' },
    { code: 'FCO', name: 'Leonardo da Vinci–Fiumicino Airport', city: 'Rome' },
    { code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas Airport', city: 'Madrid' },
    { code: 'BCN', name: 'Barcelona–El Prat Airport', city: 'Barcelona' },
    { code: 'MUC', name: 'Munich Airport', city: 'Munich' },
    { code: 'CPH', name: 'Copenhagen Airport', city: 'Copenhagen' },
];

const mockFlights = [
    // For Istanbul
    // iST - LHR
    { 
        id: 1, 
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '10:00 AM', 
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours', 
        price: 4551, airline: 'Pegasus' 
    },
    { 
        id: 2, 
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '5:00 AM', 
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours', 
        price: 5650, airline: 'Turkish Airlines' 
    },
    {
        id: 3,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 4,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // iST - CDG
    {
        id: 5,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '10:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 6,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '5:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 7,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '20:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 8,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '13:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // iST - FRA
    {
        id: 9,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '10:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 10,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '5:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 11,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '20:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 12,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '13:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // iST - AMS
    {
        id: 13,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '10:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 14,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '5:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 15,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '20:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 16,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '13:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // iST - FCO
    {   
        id: 17,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '10:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 18,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '5:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 19,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '20:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 20,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '13:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // iST - MAD
    {
        id: 21,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '10:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 22,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '5:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 23,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '20:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 24,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '13:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // iST - BCN
    {
        id: 25,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '10:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 26,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '5:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 27,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '20:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 28,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '13:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // iST - MUC
    {
        id: 29,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '10:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 30,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '5:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 31,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '20:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 32,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '13:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // iST - CPH
    {
        id: 33,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '10:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 34,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '5:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 35,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '20:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 36,
        departureCity: 'Istanbul', departureCode: 'IST', departureAirport:'Istanbul Atatürk Airport', departureTime: '13:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // For London
    // LHR - IST
    {
        id: 37,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '10:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Atatürk Airport', arrivalCode: 'IST', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 38,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '5:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Atatürk Airport', arrivalCode: 'IST', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 39,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '20:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Atatürk Airport', arrivalCode: 'IST', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 40,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '13:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Atatürk Airport', arrivalCode: 'IST', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // LHR - CDG
    {
        id: 41,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '10:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 42,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '5:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 43,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '20:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 44,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '13:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // lHR - FRA
    {
        id: 45,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '10:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 46,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '5:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 47,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '20:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 48,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '13:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // LHR - AMS
    {
        id: 49,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '10:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 50,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '5:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 51,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '20:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 52,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '13:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // LHR -FCO
    {
        id: 53,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '10:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 54,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '5:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 55,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '20:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 56,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '13:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // LHR - MAD
    {
        id: 57,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '10:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 58,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '5:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 59,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '20:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 60,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '13:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // LHR - BCN
    {
        id: 61,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '10:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 62,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '5:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 63,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '20:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 64,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '13:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // LHR - MUC
    {
        id: 65,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '10:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 66,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '5:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 67,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '20:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 68,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '13:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // LHR - CPH
    {
        id: 69,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '10:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 70,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '5:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 71,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '20:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 72,
        departureCity: 'London', departureCode: 'LHR', departureAirport:'London Heathrow Airport', departureTime: '13:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // CDG - IST
    {
        id: 73,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '10:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 74,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '5:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 75,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '20:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 76,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '13:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // CDG - LHR
    {
        id: 77,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '10:00 AM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 78,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '5:00 AM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 79,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 80,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // CDG - FRA
    {
        id: 81,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '10:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 82,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '5:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 83,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '20:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 84,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '13:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // CDG - AMS 
    {
        id: 85,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '10:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 86,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '5:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 87,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '20:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 88,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '13:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // CDG - FCO
    {
        id: 89,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '10:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 90,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '5:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 91,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '20:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 92,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '13:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // CDG - MAD
    {
        id: 93,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '10:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 94,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '5:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 95,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '20:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 96,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '13:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // CDG - BCN
    {
        id: 97,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '10:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 98,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '5:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 99,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '20:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 100,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '13:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // CDG - MUC
    {
        id: 101,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '10:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 102,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '5:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 103,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '20:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 104,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '13:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // CDG - CPH
    {
        id: 105,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '10:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 106,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '5:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 107,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '20:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 108,
        departureCity: 'Paris', departureCode: 'CDG', departureAirport:'Charles de Gaulle Airport', departureTime: '13:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // FRA - IST
    {
        id: 109,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '10:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 110,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '5:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 111,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '20:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 112,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '13:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // FRA - LHR 
    {
        id: 113,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '10:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 114,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '5:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 115,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 116,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // FRA - CDG 
    {
        id: 117,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '10:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 118,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '5:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 119,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '20:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 120,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '13:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    // FRA - AMS
    {
        id: 121,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '10:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 122,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '5:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 123,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '20:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 124,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '13:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    // FRA - FCO
    {
        id: 125,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '10:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 126,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '5:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 127,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '20:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 128,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '13:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // FRA - MAD
    {
        id: 129,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '10:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 130,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '5:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 131,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '20:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 132,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '13:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // FRA - BCN
    {
        id: 133,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '10:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 134,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '5:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 135,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '20:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 136,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '13:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    // FRA - MUC
    {
        id: 137,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '10:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 138,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '5:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 139,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '20:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 140,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '13:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // FRA - CPH
    {
        id: 141,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '10:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 142,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '5:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 143,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '20:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 144,
        departureCity: 'Frankfurt', departureCode: 'FRA', departureAirport:'Frankfurt Airport', departureTime: '13:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    // AMS - IST 
    {
        id: 145,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '10:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 146,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '5:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 147,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '20:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 148,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '13:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //AMS -LHR
    {
        id: 149,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '10:00 AM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 150,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '5:00 AM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 151,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 152,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //AMS - CDG
    {
        id: 153,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '10:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Paris Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 154,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '5:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Paris Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 155,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '20:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Paris Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 156,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '13:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Paris Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    //AMS - FRA
    {
        id: 157,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '10:00 AM', 
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 158,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '5:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 159,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '20:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 160,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '13:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //AMS - FCO
    {
        id: 161,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '10:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 162,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '5:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 163,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '20:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 164,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '13:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //AMS - MAD
    {
        id: 165,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '10:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 166,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '5:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 167,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '20:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 168,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '13:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //AMS - BCN
    {
        id: 169,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '10:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 170,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '5:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 171,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '20:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 172,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '13:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //AMS- MUC
    {
        id: 173,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '10:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 174,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '5:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 175,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '20:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 176,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '13:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //AMS - CPH
    {
        id: 177,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '10:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 178,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '5:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },  
    {
        id: 179,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '20:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 180,
        departureCity: 'Amsterdam', departureCode: 'AMS', departureAirport:'Amsterdam Airport Schiphol', departureTime: '13:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //FCO - IST
    {
        id: 181,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '10:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 182,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '5:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 183,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '20:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 184,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '13:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //FCO - LHR
    {
        id: 185,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '10:00 AM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 186,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '5:00 AM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 187,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 188,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    //FCO - CDG
    {
        id: 189,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '10:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 190,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '5:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 191,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '20:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 192,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '13:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },


    //FCO - FRA
    {
        id: 193,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '10:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 194,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '5:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 195,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '20:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 196,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '13:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },


    //FCO - AMS
    {
        id: 197,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '10:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 198,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '5:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 199,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '20:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 200,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '13:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    //FCO - MAD
    {
        id: 201,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '10:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 202,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '5:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 203,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '20:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 204,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '13:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    //FCO - BCN
    {
        id: 205,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '10:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 206,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '5:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 207,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '20:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 208,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '13:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //FCO - MUC
    {
        id: 209,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '10:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 210,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '5:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 211,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '20:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 212,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '13:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //FCO - CPH
    {
        id: 213,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '10:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 214,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '5:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 215,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '20:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 216,
        departureCity: 'Rome', departureCode: 'FCO', departureAirport:'Leonardo da Vinci–Fiumicino Airport', departureTime: '13:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    //MAD -IST
    {
        id: 217,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '10:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 218,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '5:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 219,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '20:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 220,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '13:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    //MAD -LHR
    {
        id: 221,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '10:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 222,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '5:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 223,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 224,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MAD - CDG
    {
        id: 225,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '10:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 226,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '5:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 227,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '20:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 228,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '13:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MAD - FRA
    {
        id: 229,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '10:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 230,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '5:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 231,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '20:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 232,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '13:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MAD -LHR
    {
        id: 233,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '10:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 234,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '5:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 235,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 236,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MAD - FCO
    {
        id: 237,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '10:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 238,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '5:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 239,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '20:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 240,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '13:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MAD - BCN
    {
        id: 241,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '10:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 242,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '5:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 243,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '20:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 244,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '13:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MAD- MUC
    {
        id: 245,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '10:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 246,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '5:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 247,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '20:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 248,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '13:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MAD - CPH
    {
        id: 249,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '10:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 250,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '5:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 251,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '20:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 252,
        departureCity: 'Madrid', departureCode: 'MAD', departureAirport:'Adolfo Suárez Madrid–Barajas Airport', departureTime: '13:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    //BCN -IST
    {
        id: 253,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '10:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 254,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '5:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 255,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '20:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 256,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '13:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //BCN -LHR
    {
        id: 257,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '10:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 258,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '5:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 259,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 260,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //BCN - CDG
    {
        id: 261,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '10:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 262,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '5:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 263,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '20:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 264,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '13:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    //BCN - FRA
    {
        id: 265,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '10:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 266,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '5:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 267,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '20:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 268,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '13:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //BCN - AMS
    {
        id: 269,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '10:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 270,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '5:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 271,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '20:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 272,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '13:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //BCN - FCO
    {
        id: 273,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '10:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 274,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '5:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 275,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '20:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 276,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '13:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //BCN - MAD
    {
        id: 277,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '10:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 278,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '5:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 279,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '20:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 280,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '13:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //BCN- MUC
    {
        id: 281,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '10:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 282,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '5:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 283,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '20:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 284,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '13:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //BCN - CPH
    {
        id: 285,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '10:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 286,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '5:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 287,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '20:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 288,
        departureCity: 'Barcelona', departureCode: 'BCN', departureAirport:'Barcelona–El Prat Airport', departureTime: '13:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },


    //MUC -IST
    {
        id: 289,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '10:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 290,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '5:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 291,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '20:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 292,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '13:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MUC -LHR
    {
        id: 293,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '10:00 AM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 294,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '5:00 AM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 295,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 296,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'London Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MUC - CDG
    {
        id: 297,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '10:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 298,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '5:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 299,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '20:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 300,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '13:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MUC - FRA
    {
        id: 301,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '10:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 302,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '5:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 303,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '20:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 304,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '13:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    //MUC - AMS
    {
        id: 305,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '10:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 306,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '5:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 307,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '20:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 308,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '13:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport Schiphol', arrivalCode: 'AMS', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MUC - FCO
    {
        id: 309,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '10:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 310,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '5:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 311,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '20:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 312,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '13:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MUC - MAD
    {
        id: 313,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '10:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 314,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '5:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 315,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '20:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 316,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '13:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //MUC - BCN
    {
        id: 317,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '10:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 318,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '5:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 319,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '20:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 320,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '13:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },
    
    //MUC - CPH
    {
        id: 321,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '10:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 322,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '5:00 AM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 323,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '20:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 324,
        departureCity: 'Munich', departureCode: 'MUC', departureAirport:'Munich Airport', departureTime: '13:00 PM',
        arrivalCity: 'Copenhagen', arrivalAirport:'Copenhagen Airport', arrivalCode: 'CPH', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },




    //CPH - IST
    {
        id: 325,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '10:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 326,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '5:00 AM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 327,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '20:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 328,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '13:00 PM',
        arrivalCity: 'Istanbul', arrivalAirport:'Istanbul Airport', arrivalCode: 'IST', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //CPH - LHR
    {
        id: 329,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '10:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 330,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '5:00 AM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 331,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '20:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 332,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '13:00 PM',
        arrivalCity: 'London', arrivalAirport:'Heathrow Airport', arrivalCode: 'LHR', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //CPH - CDG
    {
        id: 333,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '10:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 334,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '5:00 AM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 335,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '20:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 336,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '13:00 PM',
        arrivalCity: 'Paris', arrivalAirport:'Charles de Gaulle Airport', arrivalCode: 'CDG', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //CPH - FRA
    {
        id: 337,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '10:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 338,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '5:00 AM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 339,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '20:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 340,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '13:00 PM',
        arrivalCity: 'Frankfurt', arrivalAirport:'Frankfurt Airport', arrivalCode: 'FRA', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //CPH - AMS
    {
        id: 341,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '10:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport', arrivalCode: 'AMS', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 342,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '5:00 AM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport', arrivalCode: 'AMS', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 343,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '20:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport', arrivalCode: 'AMS', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 344,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '13:00 PM',
        arrivalCity: 'Amsterdam', arrivalAirport:'Amsterdam Airport', arrivalCode: 'AMS', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //CPH - FCO
    {
        id: 345,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '10:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 346,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '5:00 AM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 347,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '20:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 348,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '13:00 PM',
        arrivalCity: 'Rome', arrivalAirport:'Leonardo da Vinci–Fiumicino Airport', arrivalCode: 'FCO', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //CPH - MAD
    {
        id: 349,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '10:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 350,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '5:00 AM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 351,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '20:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 352,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '13:00 PM',
        arrivalCity: 'Madrid', arrivalAirport:'Adolfo Suárez Madrid–Barajas Airport', arrivalCode: 'MAD', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //CPH - BCN
    {
        id: 353,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '10:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 354,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '5:00 AM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 355,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '20:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 356,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '13:00 PM',
        arrivalCity: 'Barcelona', arrivalAirport:'Barcelona–El Prat Airport', arrivalCode: 'BCN', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

    //CPH - MUC
    {
        id: 357,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '10:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '14:05 PM', duration: '4 hours',
        price: 4551, airline: 'Pegasus'
    },
    {
        id: 358,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '5:00 AM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '8:05 AM', duration: '3 hours',
        price: 5650, airline: 'Turkish Airlines'
    },
    {
        id: 359,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '20:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '1:05 AM', duration: '5 hours',
        price: 2000, airline: 'Wizz Air'
    },
    {
        id: 360,
        departureCity: 'Copenhagen', departureCode: 'CPH', departureAirport:'Copenhagen Airport', departureTime: '13:00 PM',
        arrivalCity: 'Munich', arrivalAirport:'Munich Airport', arrivalCode: 'MUC', arrivalTime: '15:05 PM', duration: '2 hours',
        price: 6900, airline: 'Ryan Air'
    },

];