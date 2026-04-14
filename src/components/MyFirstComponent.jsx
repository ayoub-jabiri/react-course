import "../assets/css/FirstComponentStyle.css";

export default function MyFirstComponent() {
    return (
        <div>
            <p className={"test"}>This is the home page</p>
            <button onClick={sayHello}>Button</button>
        </div>
    );
}

function sayHello() {
    alert("Hello");
}
