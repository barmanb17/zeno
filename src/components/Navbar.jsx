import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate()
    const { user } = useUser()
    const { openSignIn } = useClerk()
    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-sm flex justify-center py-4'>
            <div className='max-w-7xl w-full flex justify-between items-center px-4 sm:px-8 xl:px-16'>
                <div className='flex items-center gap-2 sm:gap-3 cursor-pointer' onClick={() => navigate('/')}>
                    <img
                        src={assets.logo}
                        alt="logo"
                        className='w-10 sm:w-12 cursor-pointer'
                        onClick={() => navigate('/')}
                    />
                    <span className='text-2xl sm:text-3xl font-medium text-white'>zeno.ai</span>
                </div>

                {
                    user ? <UserButton /> : (<button
                        className='flex items-center gap-2 rounded-full text-xs sm:text-sm cursor-pointer bg-white text-black px-6 py-2 hover:bg-gray-100 transition-colors'
                        onClick={openSignIn}
                    >
                        Get started <ArrowRight className='w-3 h-3 sm:w-4 sm:h-4' />
                    </button>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar