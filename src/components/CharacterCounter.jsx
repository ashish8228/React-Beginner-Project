import { useState } from "react"

const CharacterCounter = () => {
    const [Charinput, Setcharinput] = useState("");
    function charinpfn(e) {
        Setcharinput(e.target.value)
    }
   
    return (
         <div className="flex justify-center items-center h-screen w-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex flex-col items-center border-2 border-gray-200 shadow-xl bg-white gap-6 rounded-2xl px-8 py-10">
            <h1 className="text-center text-4xl font-extrabold text-gray-800">Character Counter</h1>
            <div className="text-center text-lg font-medium text-gray-600">
                Current Count = <span className="text-indigo-600 font-bold">{Charinput.length}</span>
            </div>
            <div>
                <label htmlFor="message" className="mb-2 font-semibold text-gray-700">Enter Your Character</label>
                <input
                    type="text"
                    placeholder="Enter your message"
                    className="border rounded-lg px-4 py-2 border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                    value={Charinput}
                    onChange={charinpfn}
                />
            </div>
        </div>
    </div>
    )
}

export default CharacterCounter
