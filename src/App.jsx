import { useState } from "react";
import "./assets/css/main.css";

function App() {
    const [count, setCount] = useState(1);

    function handlePlusClick() {
        setCount((c) => {
            return c + 1;
        });
        setCount((c) => {
            return c + 1;
        });
    }
    return (
        <>
            <div className="container">
                <h1>The count is: {count}</h1>
                <button onClick={handlePlusClick} className="border px-2">
                    +
                </button>
            </div>
        </>
    );
}

export default App;
