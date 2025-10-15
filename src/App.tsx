
import './App.css'
import LandingPage from '@/pages/LandingPage';
import AppLayout from '@/layOut/AppLayout';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/themeProvider";
import Job from '@/pages/Job';

function App() {
  

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
      <Routes>

         <Route  element={<AppLayout/>} >

         <Route path='/' element={<LandingPage/>} />
         <Route path='/job' element={<Job />}  />
         
         </Route>
      </Routes>
     </ThemeProvider>
    </>
  )
}

export default App;



// Khi kahi p hame y bhi dekhne ko milta hai like protected Route.
// <Route path='/' element={<ProtectedRoute><appLayout/> </ProtectedRoute>}> yha p jo protectedRoute hai wo hame protect karta hai from 
// like login hai tabhi aage jane deta hai ye wala hisab kitab hai yha p okkh!...