import {Outlet} from 'react-router-dom';
import '@/App.css';
import Header from './Header';

const AppLayout = () => {
  return (
    <div className='relative min-h-screen'>

        <div className='grid-background absolute inset-0 z-0'></div>
         
         <main className="min-h-screen container relative z-10">
             <Header />
             <Outlet/>
         </main>
         <div className='text-center bg-gray-600 mt-10 p-10 font-bold text-2xl z-10'>Made ❤️ with by @techy_Prey</div>
    </div>
  );
}

export default AppLayout