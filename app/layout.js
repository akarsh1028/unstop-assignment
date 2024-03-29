import { Inter } from 'next/font/google'
import './globals.css'
import { lazy } from 'react';

import dynamic from 'next/dynamic'
 
const Navbar = dynamic(() => import('./components/Navbar'))

// const Navbar = lazy(() => import ('./components/Navbar'));
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar added for mobile view */}
        <section className="xl:hidden"><Navbar/></section>
        {children}
      </body>
    </html>
  )
}
