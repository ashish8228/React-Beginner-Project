import { useState } from "react";

export default function ShowHideText() {

    const [show, setshow] = useState(false);

    function showhidefn() {
        setshow(!show)
    }

    console.log(show)

    return (
        <div>
            <div className="text-center">
                <button onClick={showhidefn} className="px-5 py-1 bg-blue-700 text-white rounded-lg">
                    {show ? "Show" : "Hide"}
                </button>
                <p className={`${show ? "hidden" : "block"} `}>This is the hidden text </p>
            </div>
        </div>
    )
}