import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
//import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import data from '@/data/companies.json';

import Autoplay from "embla-carousel-autoplay"



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
            
             <div className='flex justify-center gap-5 mt-10 pt-14 '>
                <Link to='/jobs'><Button className='text-3xl font-semibold p-8 bg-blue-400 text-white hover:bg-gray-200 hover:text-black'>Find Jobs</Button></Link>
                <Link to='/post-jobs'><Button className='text-3xl font-semibold p-8 bg-red-900 text-white hover:bg-gray-200 hover:text-black'>Post a Jobs</Button></Link>
           </div>
             
             {/*Corusel...*/}
           
     <Carousel 
       plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
     className="w-full py-10 my-15 mx-15"
     >

      <CarouselContent  className='flex items-center gap-5 sm:gap-20 '>
        {data.map((x) => 
          <CarouselItem key={x.id} className='md:basis-1/3 lg:basis-1/6'>
                <img src={x.path} alt={x.name} className='h-9 sm:h-14 object-contain'/>
          </CarouselItem>
       )}
      </CarouselContent>
      
    </Carousel>

       {/* banner */}
        <section>
             {/* cards*/}
        </section>

        {/* Accordian */ }
   </main>
  )
}

export default LandingPage
