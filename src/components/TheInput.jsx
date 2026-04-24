import { useState } from "react";

export default function TheInput() {
    let [inputValue, setInputValue] = useState("");

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }
    return (
        <div className="m-4">
            <label className="block">The Name:</label>
            <input
                type="text"
                className="block mt-2 p-2 bg-gray-300 border"
                placeholder="The Name"
                onChange={handleInputChange}
                value={inputValue}
            />
            {inputValue}
        </div>
    );
}
