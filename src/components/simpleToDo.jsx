//  Simple Todo List
// Concepts: arrays in state
//  Requirements:
//  Input to add todo
//  Display list
//  Clear input after add
// :point_right: Bonus: delete a todo

import { useEffect, useState } from "react";

const SimpleTodoList = () => {
    const [storage, setstorage] = useState([])
    const [input, setInput] = useState("");

    const setInputfn = (e) => {
        return (
            setInput(e.target.value)
        )
    }
    const addbtn = (e) => {
        if(input.trim()==""){
            return;
        }
        else{
            setstorage(previosTask=>[...previosTask, input])
            setInput("")
            console.log(storage.length)
        }
        
    }


    return (
        <div className="flex justify-center items-center h-screen w-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center border-2 border-gray-200 shadow-xl bg-white gap-6 rounded-2xl px-8 py-10">
                <h1 className="text-center text-4xl font-extrabold text-gray-800">Simple Todo List</h1>

                <div>
                    <label htmlFor="message" className="mb-2 font-semibold text-gray-700">Enter Your Task here</label>
                    <div className="flex items-center gap-5">
                        <input
                            type="text"
                            placeholder="Enter your message"
                            className="border rounded-lg px-4 py-2 border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                            value={input}
                            onChange={setInputfn}
                        />
                        <button className="px-10 py-3 bg-blue-600 rounded-xl text-white cursor-pointer" onClick={addbtn}>Add</button>
                    </div>
                    {
                    storage.map((vsl, ids) => {
                        return (
                            <div key={ids} className="flex flex-col gap-4 mt-5">
                                <p className=" border-2 px-3 py-2 rounded-md  border-gray-500 text-xl flex justify-between" key={ids}>{vsl} <button className="px-4 py-2 bg-red-600 rounded-xl text-white cursor-pointer"onClick={()=>{alert("You can not delete this because developers are so busy in another project so do not try this ⏳")}}>Remove</button></p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default SimpleTodoList;
