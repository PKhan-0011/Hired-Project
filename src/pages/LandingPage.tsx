import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';

const LandingPage = () => {
  return (
   <main>
     <section className="flex flex-col gap-3 mt-15  pt-15">
         <h1 className="text-8xl max-w-5xl mx-auto font-extrabold tracking-tight flex flex-col gap-3 bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-neutral-400 ">
          Find Your Dream job 
          <span className="flex flex-row pr-15 justify-center gap-5">
          and get <img src="logo (3).png" alt="# hiredImage" className="w-50 h-30"/>
          </span>
          </h1>

          <p className="text-center text-2xl font-semibold text-neutral-400">Your career journey starts here — or find the perfect fit for your team. </p>
     </section>
       <div>
            
             <div className='flex justify-center gap-5 mt-10 pt-14 '>
                <Link to='/jobs'><Button className='text-3xl font-semibold p-8 bg-blue-400 text-white hover:bg-gray-200 hover:text-black'>Find Jobs</Button></Link>
                <Link to='/post-jobs'><Button className='text-3xl font-semibold p-8 bg-red-900 text-white hover:bg-gray-200 hover:text-black'>Post a Jobs</Button></Link>
           </div>

            {/*carousel */}
       </div>

       {/* banner */}
        <section>
             {/* cards*/}
        </section>

        {/* Accordian */ }
   </main>
  )
}

export default LandingPage