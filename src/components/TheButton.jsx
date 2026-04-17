import { useState } from "react";

export default function TheButton() {
    const [title, setTitle] = useState("Tarmeez");

    function changeTitle() {
        setTitle("Academy");
    }

    return (
        <div className="w-[300px] bg-gray-100 mx-auto my-4 shadow-sm text-center py-4">
            <h3>{title}</h3>
            <button
                onClick={changeTitle}
                className="p-2 bg-green-500 cursor-pointer rounded-md px-4"
            >
                Click
            </button>
        </div>
    );
}
