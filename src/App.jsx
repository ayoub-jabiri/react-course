import Article from "./components/Article";

function App() {
    return (
        <div>
            <Article name="Ahmed" email="ahmed@gmail.com">
                <h2>Article 1 body</h2>
            </Article>
            <Article name="Ali" email="ali@gmail.com">
                Article 2 body
            </Article>
            <Article name="Sayed" email="sayed@gmail.com">
                Article 3 body
            </Article>
        </div>
    );
}

export default App;
