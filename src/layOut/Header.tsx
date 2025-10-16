import { SignedOut,  SignedIn,  } from '@clerk/clerk-react';
import {Link} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import { PenBox } from 'lucide-react';

const Header = () => {
   
   

  return (
    <div className='p-2 container w-full border-b-2 '>
          <nav className='flex flex-row items-center justify-between w-full pl-5 '>
                <Link to='/' ><img src="logo (3).png" alt="#logo image"  className='h-20 w-40 pl-5'/></Link>
                {/* <Button className='p-7 w-50 text-3xl font-bold' variant={'outline'}>Login</Button> */}

                    <div className=' flex gap-8'>
                          <SignedOut>
                             <Button variant='outline'>Login</Button>
                         </SignedOut>
                        

                       <SignedIn>
                           <Button className='rounded-full' variant='destructive'> 
                          <PenBox />
                          Post a Job</Button>
                    </SignedIn>
                    </div>
          </nav>
    </div>
  )
}

export default Header