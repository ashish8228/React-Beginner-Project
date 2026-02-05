// Button Color Toggle
// Concepts: dynamic styles
//  Requirements:
//  Button changes color on click
//  Toggle between two colors

import React, { useState } from 'react'

const ButtonColorToggle = () => {
    const [colour, setcolour] = useState(true)
    
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center border-2 border-gray-200 shadow-xl bg-white gap-6 rounded-2xl px-8 py-10">
                <h1 className="text-center text-4xl font-extrabold text-gray-800">Button Color Toggle</h1>
                <button className={`${colour ? "bg-green-600 " : "bg-red-600"} text-white px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150`} onClick={()=>setcolour(!colour)}>{colour ? "Green Button" : "Red Button"}</button>
            </div>
        </div>
    )
}

export default ButtonColorToggle