import { useState } from "react";
import "./assets/css/main.css";
import TestComponent from "./components/TestComponent";
import { TestContext } from "./contexts/TestContext";

function App() {
    console.log("render");
    const [title, setTitle] = useState("Hello World");

    function handleTitleChange() {
        setTitle("New Title");
    }
    return (
        <>
            <div className="container">
                <TestContext.Provider
                    value={{
                        testTitle: title,
                        id: 5,
                        handleTitleChange: handleTitleChange,
                    }}
                >
                    <TestComponent />
                </TestContext.Provider>
            </div>
        </>
    );
}

export default App;
