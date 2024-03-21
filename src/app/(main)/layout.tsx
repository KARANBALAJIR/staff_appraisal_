import { ClerkLoaded,ClerkLoading, ClerkProvider, SignIn, SignUp, SignedIn, SignedOut } from '@clerk/nextjs'

import React from 'react'
import LoginCred from '../../components/LoginCred';
import Loading from '@/components/Loading';

const layout = ({children}: Readonly<{ children: React.ReactNode;}>) => {
  return (
    <ClerkProvider>
            
                   <ClerkLoading>
                        <div className='flex h-screen w-screen justify-center items-center'>
                              <Loading/>
                        </div>
                   </ClerkLoading>
                   <ClerkLoaded>
                        <SignedIn>
                                {children}
                        </SignedIn>
                        <SignedOut>
                            <LoginCred/>
                        </SignedOut>
                   </ClerkLoaded>
      
                
            </ClerkProvider>
  )
}

export default layout