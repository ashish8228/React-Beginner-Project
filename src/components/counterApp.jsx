import { useState } from "react"

export default function CounterApp() {
    const btnstyle = `text-white rounded-lg px-6 py-2 cursor-pointer font-semibold transition-transform transform hover:scale-105`;

    const [num, setnum] = useState(0)

    function increasefn() {
        setnum(num + 1);
    }

    const decreasefn = () => {
        setnum(num - 1);
    }

    const resetfn = () => {
        setnum(0);
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center border-2 border-gray-200 shadow-xl bg-white gap-6 rounded-2xl px-8 py-10">
                <h1 className="text-center text-4xl font-extrabold text-gray-800">Counter App</h1>
                <div className="text-center text-lg font-medium text-gray-600">
                    Current Count = <span className="text-indigo-600 font-bold">{num}</span>
                </div>
                <div className="flex gap-4">
                    <button className={`${btnstyle} bg-green-500 hover:bg-green-600`} onClick={increasefn}>Increment</button>
                    <button className={`${btnstyle} bg-yellow-500 hover:bg-yellow-600`} onClick={decreasefn}>Decrement</button>
                    <button className={`${btnstyle} bg-red-500 hover:bg-red-600`} onClick={resetfn}>Reset</button>
                </div>
            </div>
        </div>
    )
}
