import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
//import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import data from '@/data/companies.json';
import Autoplay from "embla-carousel-autoplay";
import faqs from '@/data/faq.json';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
     className="w-full py-15 my-15 mx-auto  over-flow-hidden container"
     >

      <CarouselContent  className='flex items-center gap-5 sm:gap-20 '>
        {data.map((x) => 
          <CarouselItem key={x.id} className='md:basis-1/3 lg:basis-1/6'>
                <img src={x.path} alt={x.name} className='h-12 sm:h-14 object-contain'/>
          </CarouselItem>
       )}
      </CarouselContent>
      
    </Carousel>
         
         <div className= 'flex justify-center mt-30 px-8 '>
              <img src="/banner.jpeg" alt="#Hired-Image" className=' w-full '/>
         </div>
       
        <section className=' mt-30 px-8 grid grid-cols-1 md:grid-cols-2 gap-5'>
              <Card className='py-10 my-10 '> 
                   <CardHeader className='space-y-10'>
                     <CardTitle className='text-3xl font-semibold'>For Job Seeksers</CardTitle>
                     <CardDescription className='text-2xl text-white'>Search and apply for jobs, track applications, and more.</CardDescription>
                     
                   </CardHeader>
             </Card>

             <Card className='py-10 my-10'>
                   <CardHeader className='space-y-10'>
                     <CardTitle className='text-3xl font-semibold'>For Employers</CardTitle>
                     <CardDescription className='text-2xl text-white'>Post jobs, manage applications, and find the best candidates..</CardDescription>
                   </CardHeader>
             </Card>
        </section>
         
         {/* Accordian*/}
         
        <div className='container bg-amber-500 '>
        <Accordion type="multiple" className='w-full'>
           {faqs.map((x, index) => (
              <AccordionItem key={index} value={`item-${index+1}`}>
             <AccordionTrigger>{x.question}</AccordionTrigger>
             <AccordionContent>
               {x.answer}
             </AccordionContent>
           </AccordionItem> 
           ))}
       </Accordion>
        </div>

   </main>
  )
}

export default LandingPage

