import { useState } from "react"

export default function CounterApp() {

    const btnstyle = `text-white rounded-lg px-4 py-1 cursor-pointer`;

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
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="flex justify-center items-center flex-col border-2 border-gray-300 gap-4 rounded-2xl px-4 py-6">
                <h1 className="text-center text-4xl font-bold">Counter App</h1>
                <div className="text-center">Current Count = {num}</div>
                <div className="flex justify-center items-center gap-2.5">
                    <button className={`${btnstyle} bg-green-500`} onClick={increasefn}>Increment</button>
                    <button className={`${btnstyle} bg-yellow-500`} onClick={decreasefn}>Decrement</button>
                    <button className={`${btnstyle} bg-red-500`} onClick={resetfn}>Reset</button>
                </div>
            </div>
        </div>
    )
}