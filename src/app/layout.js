import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import AuthProvider from '@/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AcePrep',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

<AuthProvider>

      <ThemeContextProvider>
      <ThemeProvider>

        <div className="container">
          <div className='nv'>
          <Navbar/>
          </div>
    
        <div className="wrapper"> 
       
   
        {children} 
      
        </div>
        <Footer/>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
          
</AuthProvider>
      </body>
    </html>
  );
}
