import './globals.css'
import { Inter } from 'next/font/google'
import { FlightSearchProvider } from '@/context/FlightContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amadeus Flight Search',
  description: 'Flight search app built with Next.js and Amadeus Mock API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlightSearchProvider>
          {children}
        </FlightSearchProvider>
      </body>
    </html>
  )
}
