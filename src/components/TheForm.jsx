import { useState } from "react";

export default function TheForm() {
    const [formInputs, setFormInputs] = useState({ name: "", email: "" });
    return (
        <form
            className="w-fit p-4"
            onSubmit={(e) => {
                e.preventDefault();
                console.log(formInputs);
            }}
        >
            <label className="block">Name:</label>
            <input
                type="text"
                className="block mt-2 p-2 bg-gray-300 border"
                placeholder="Name"
                value={formInputs.name}
                onChange={(e) => {
                    setFormInputs({ ...formInputs, name: e.target.value });
                }}
            />
            <hr className="my-2" />
            <label className="block">Email:</label>
            <input
                type="text"
                className="block mt-2 p-2 bg-gray-300 border"
                placeholder="Email"
                value={formInputs.email}
                onChange={(e) => {
                    setFormInputs({ ...formInputs, email: e.target.value });
                }}
            />
            <hr className="my-2" />
            <button className="bg-green-500 text-white px-4 py-2 border rounded-sm cursor-pointer">
                Submit
            </button>
        </form>
    );
}
