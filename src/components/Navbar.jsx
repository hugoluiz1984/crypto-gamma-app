import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoIcon } from '../icons/icon'

const Navbar = () => {

  const navigate = useNavigate();


  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
        <div className="warpper-container w-full"> 
            <div className="flex items-center gap-1 cursor-pointer" onClick={()=> navigate('/')}>
                <LogoIcon />
                <p className="font-semibold">
                    <span className="text-yellow-500">C</span>ypto
                    <span className="text-yellow-500">G</span>amma
                </p>
            </div>
        </div>
    </div>
  )
}

export default Navbar