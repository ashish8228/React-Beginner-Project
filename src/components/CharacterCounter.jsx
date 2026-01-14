import { useState } from "react"


// Character Counter
// Concepts: state + derived data
//  Requirements:
//  Input field
//  Show number of characters typed


const CharacterCounter = () => {
    const [Charinput, Setcharinput] = useState("");
        function charinpfn(e) {
            Setcharinput(e.target.value)
        }

    return (
        <div>
            <div className="text-center">
                <div className="flex flex-col items-center p-4 border w-max ms-1">
                    <label htmlFor="message">Enter Your Character</label>
                    <input type="text" placeholder="Enter your message" className="border rounded-lg px-3 py-2 border-gray-700 w-sm" value={Charinput} onChange={charinpfn} />
                    <div>
                        <h3>Number Of Character you enter :- {Charinput.length}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCounter