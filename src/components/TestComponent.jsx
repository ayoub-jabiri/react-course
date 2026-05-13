import { useContext } from "react";
import { TestContext } from "../contexts/TestContext";

export default function TestComponent() {
    const { testTitle, id, handleTitleChange } = useContext(TestContext);

    return (
        <div>
            <h2>{testTitle}</h2>
            <p>{id}</p>
            <button onClick={handleTitleChange}>Change Title</button>
        </div>
    );
}
