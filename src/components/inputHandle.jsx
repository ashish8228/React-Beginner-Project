import { useState } from "react";

export default function InputHandle() {

    const [userinput, setinput] = useState("");

    function userin (e){
        setinput(e.target.value)
        console.log(userinput)
    } 
    return (
        <div>
            <div className="text-center">
                <div className="flex flex-col items-center p-4 border w-max ms-1">
                    <label htmlFor="message">Enter Something...</label>
                    <input type="text" placeholder="Enter your message" className="border rounded-lg px-3 py-2 border-gray-700 w-sm" value={userinput} onChange={userin}/>
                </div>
            </div>
        </div>
    )
}