import "./assets/css/main.css";
// import AppHeader from "./components/layout/AppHeader";
// import MainSection from "./components/body/MainSection";

function App() {
    const tasks = ["Home work", "Reading a book", "Workout"];

    const tasksList = tasks.map((task, i) => {
        return (
            <li key={i} style={{ backgroundColor: "green" }}>
                {task}
            </li>
        );
    });
    return (
        <>
            {/* <AppHeader />
            <MainSection /> */}
            <div>
                <ul>{tasksList}</ul>
            </div>
        </>
    );
}

export default App;
