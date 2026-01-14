import { useState } from "react";

export default function ShowHideText() {
    const [show, setshow] = useState(false);

    function showhidefn() {
        setshow(!show)
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center border-2 border-gray-200 shadow-xl bg-white gap-6 rounded-2xl px-8 py-10">
                <h1 className="text-center text-4xl font-extrabold text-gray-800">Toggle Text</h1>
                <button
                    onClick={showhidefn}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                    {show ? "Show" : "Hide"}
                </button>
                <p className={`${show ? "hidden" : "block"} text-center text-lg font-medium text-gray-600`}>
                    This is the hidden text
                </p>
            </div>
        </div>
    )
}
