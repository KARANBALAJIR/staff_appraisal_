import { ClerkLoaded,ClerkLoading, ClerkProvider, SignIn, SignUp, SignedIn, SignedOut } from '@clerk/nextjs'

import React from 'react'
import LoginCred from '../../components/LoginCred';

const layout = ({children}: Readonly<{ children: React.ReactNode;}>) => {
  return (
    <ClerkProvider>
            
                   <ClerkLoading>
                        <h1>Loading</h1>
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