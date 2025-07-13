import React from 'react'
import { AiToolsData, assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser, useClerk } from '@clerk/clerk-react'

const AiTools = () => {
    const navigate = useNavigate()
    const { user } = useUser()
    const { openSignIn } = useClerk()

    const handleToolClick = (tool) => {
        if (user) {
            navigate(tool.path)
        } else {
            openSignIn()
        }
    }

    return (
        <div className='px-4 sm:px-20 xl:px-32 my-24 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Explore Our AI Tools</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Discover the power of AI with our suite of tools designed to enhance your creativity and productivity.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 mt-10'>
                {AiToolsData.map((tool, index) => (
                    <div 
                        key={index} 
                        className='p-6 rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer' 
                        onClick={() => handleToolClick(tool)}
                    >
                        <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl' style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}} />
                        <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
                        <p className='text-gray-400 text-sm'>{tool.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AiTools