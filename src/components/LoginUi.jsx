//  Login / Logout UI (Fake)
// Concepts: boolean state
//  Requirements:
//  Button switches between “Login” / “Logout”
//  Show different text based on state


import React, { useState } from 'react'

const LoginUi = () => {
    const [state, setstate] = useState(true)
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center border-2 border-gray-200 shadow-xl bg-white gap-6 rounded-2xl px-8 py-10">
                <h1 className="text-center text-4xl font-extrabold text-gray-800">Login / Logout UI (Fake)</h1>       
                    <button className={` hover:cursor-pointer text-white border px-4 py-2 rounded ${state?"bg-green-400":"bg-red-500"}`} onClick={()=>setstate(!state)}>{state?"Logout":"Login"}</button>
            </div>
        </div>
    )
}

export default LoginUi