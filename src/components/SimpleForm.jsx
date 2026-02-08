// Simple Form
// Concepts: multiple state values
//  Requirements:
//  Name input
//  Email input
//  Submit button
//  Display submitted data

import React, { useState } from 'react'

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        number: "",
        age: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Basic validation
        if (!formData.username || !formData.email || !formData.number || !formData.age) {
            alert("Please fill in all fields")
            return
        }
        setFormData({
            username: "",
            email: "",
            number: "",
            age: ""
        })
        console.log("Submitted Data:", formData)
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center border-2 border-gray-200 shadow-xl bg-white gap-6 rounded-2xl px-8 py-10">
                <h1 className="text-center text-4xl font-extrabold text-gray-800">Simple Form</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="username" className="text-xs text-gray-600">Enter Name</label>
                        <input
                            className="border rounded px-2 py-1"
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-xs text-gray-600">Enter Email</label>
                        <input
                            className="border rounded px-2 py-1"
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="number" className="text-xs text-gray-600">Enter Number</label>
                        <input
                            className="border rounded px-2 py-1"
                            type="number"
                            name="number"
                            id="number"
                            value={formData.number}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="age" className="text-xs text-gray-600">Enter Your Age</label>
                        <input
                            className="border rounded px-2 py-1"
                            type="number"
                            name="age"
                            id="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="w-full mt-3 px-4 py-2 border rounded bg-green-600 text-white cursor-pointer transform transition hover:translate-y-[-5px]"
                        type="submit"
                    >
                        Submit details
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SimpleForm
