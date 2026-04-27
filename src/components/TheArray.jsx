import { useState } from "react";

export default function TheArray() {
    const [inputValue, setInputValue] = useState("");

    const [devices, setDevices] = useState([
        { id: 1, title: "iphone" },
        { id: 2, title: "mac" },
        { id: 3, title: "samsung" },
        { id: 4, title: "windows" },
    ]);
    let newId = 5;

    const devicesList = devices.map((device) => (
        <i key={device.id} className="block">
            {"=> " + device.title}{" "}
            <button
                className="bg-red-500 text-white text-xs rounded-md p-1 cursor-pointer"
                onClick={() => {
                    handleDelete(device.id);
                }}
            >
                Delete
            </button>
        </i>
    ));

    function handleDelete(id) {
        // const newDevices = [...devices];
        // const index = newDevices.findIndex((el) => el.id == id);
        // newDevices.splice(index, 1);

        const newDevices = devices.filter((device) => device.id != id);
        setDevices([...newDevices]);
    }

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
                        setDevices([
                            ...devices,
                            { id: newId, title: inputValue },
                        ]);
                        newId += 1;
                    }}
                >
                    Add Device
                </button>
            </div>
        </div>
    );
}
