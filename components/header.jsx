"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignInButton,UserButton} from '@clerk/nextjs'
import { Button } from './ui/button'
import { Authenticated, Unauthenticated } from 'convex/react'
import { BarLoader } from 'react-spinners'
import { useStoreUser } from '@/hooks/use-store-user';
import { Plus, Ticket } from 'lucide-react';
const Header = () => {

    const{isLoading}= useStoreUser();
    const[showUpgradeModal,setShowUpgradeModal] = useState()
  return (
    <>
    <nav className='fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex item-center justify-between'>
            {/* logo */}
            <Link href = {"/"} className='flex items-center'>
            <Image src = "/spott.png"
            alt = "spott logo"
            width = {500}
            height = {500}
            className = "w-full h-11"
            priority
            />

            {/* probadge */}
            </Link>
            {/* search and location -- desktop only */}

            {/* Right Side actions */}
            <div className='flex items-center'>
                
            </div>
            <div className='flex items-center'>
                <Button variant={"ghost"} size = "sm" onClick={setShowUpgradeModal}>
                    Pricing
                </Button>
                <Button variant='ghost' size="sm" asChild className={"mr-2"}>
                    <Link href="explore">Explore</Link>
                </Button>


            <Authenticated>
                <Button size="sm" asChild className="flex gap-2 mr-4">
                <Link href="/create-event">
                <Plus className='w-4 h-4'></Plus>
                <span className='hidden sm:inline'>Create Event</span>
                
                </Link>
                </Button>

              <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Link 
                    label="My Tickets"
                    labelIcon = {<Ticket size={16}/>}
                    href="/my-tickets"
                    />
                    <UserButton.Link 
                    label="My Events"
                    labelIcon = {<Ticket size={16}/>}
                    href="/my-events"
                    />
                    <UserButton.Action label="manageAccount"/>
                </UserButton.MenuItems>
              </UserButton>
            </Authenticated>

            <Unauthenticated>
              <SignInButton mode = "modal">
              <Button size = "sm">Sign In</Button>
              </SignInButton>
            </Unauthenticated>
            
            </div>
        </div>
        {/* mobile search feaure */}

        {/* loader */}
        {isLoading && (
            <div className='absolute bottom-0 left-0 w-full'>
            <BarLoader width={"100%"} color="#a855f7"/>
        </div>
    )}

    </nav>
    {/* modals */}
    
    </>
  )
}

export default Header