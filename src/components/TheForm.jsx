import { useState } from "react";

export default function TheForm() {
    const [formInputs, setFormInputs] = useState({
        name: "",
        email: "",
        isStudent: false,
        country: "",
        status: "",
        info: "",
    });
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
            <label>Are you student:</label>
            <input
                type="checkbox"
                id="test"
                checked={formInputs.isStudent}
                onChange={(e) => {
                    setFormInputs({
                        ...formInputs,
                        isStudent: e.target.checked,
                    });
                }}
            />
            <hr className="my-2" />
            <select
                className="border"
                value={formInputs.country}
                onChange={(e) => {
                    setFormInputs({
                        ...formInputs,
                        country: e.target.value,
                    });
                }}
            >
                <option value="">-</option>
                <option>Country 1</option>
                <option>Country 2</option>
                <option>Country 3</option>
            </select>
            <hr className="my-2" />
            <div>
                <input
                    type="radio"
                    name="status"
                    value="student"
                    checked={formInputs.status == "student"}
                    onChange={(e) => {
                        setFormInputs({
                            ...formInputs,
                            status: e.target.value,
                        });
                    }}
                />
                <label>Student</label>
                <input
                    type="radio"
                    name="status"
                    value="teacher"
                    checked={formInputs.status == "teacher"}
                    onChange={(e) => {
                        setFormInputs({
                            ...formInputs,
                            status: e.target.value,
                        });
                    }}
                />
                <label>Teacher</label>
            </div>
            <hr className="my-2" />
            <label className="block">Info:</label>
            <textarea
                className="block mt-2 p-2 bg-gray-300 border"
                value={formInputs.info}
                onChange={(e) => {
                    setFormInputs({ ...formInputs, info: e.target.value });
                }}
            ></textarea>
            <hr className="my-2" />
            <button className="bg-green-500 text-white px-4 py-2 border rounded-sm cursor-pointer">
                Submit
            </button>
        </form>
    );
}
