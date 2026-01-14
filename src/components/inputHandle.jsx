import { useState } from "react";

export default function InputHandle() {
    const [userinput, setinput] = useState("");

    function userin(e) {
        setinput(e.target.value)
        console.log(userinput)
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center border-2 border-gray-200 shadow-xl bg-white gap-6 rounded-2xl px-8 py-10">
                <h1 className="text-center text-4xl font-extrabold text-gray-800">Live Input Preview</h1>
                <div>
                    <label htmlFor="message" className="mb-2 font-semibold text-gray-700">Enter Something...</label>
                    <input
                        type="text"
                        placeholder="Enter your message"
                        className="border rounded-lg px-4 py-2 border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                        value={userinput}
                        onChange={userin}
                    />
                </div>
            </div>
        </div>
    )
}
