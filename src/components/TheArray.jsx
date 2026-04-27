import { useState } from "react";

export default function TheArray() {
    const [inputValue, setInputValue] = useState("");

    const [devices, setDevices] = useState([
        "iphone",
        "mac",
        "samsung",
        "windows",
    ]);
    const devicesList = devices.map((device, i) => (
        <i key={i} className="block">
            {"=> " + device}
        </i>
    ));
    return (
        <div className="m-5">
            <ul>{devicesList}</ul>
            <hr />

            <div>
                <label>Add New Device:</label>
                <input
                    type="text"
                    className="block px-2 border"
                    placeholder="Device Name"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <button
                    className="bg-green-500 rounded-md px-4 py-2 text-white block mt-2 cursor-pointer"
                    onClick={() => {
                        setDevices([...devices, inputValue]);
                    }}
                >
                    Add Device
                </button>
            </div>
        </div>
    );
}
