
import './App.css'
import LandingPage from '@/pages/AppLayout';
import AppLayout from '@/pages/AppLayout';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/themeProvider"

function App() {
  

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
         <Route path='/' element={<LandingPage/>} />
         <Route path='/AppLayout' element={<AppLayout/>} />
      </Routes>
    </ThemeProvider>
    </>
  )
}

export default App;