import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='p-5 container w-full border-b-2 '>
          <nav className='flex flex-row items-center justify-between w-full pl-5 '>
                <Link to='/' ><img src="logo (3).png" alt="#logo image"  className='h-20 w-40 pl-5'/></Link>
                {/* <Button className='p-7 w-50 text-3xl font-bold' variant={'outline'}>Login</Button> */}

                    <div className=''>
                          <SignedOut>
                        <SignInButton />
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    </div>
          </nav>
    </div>
  )
}

export default Header