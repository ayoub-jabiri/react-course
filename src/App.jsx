import Article from "./components/Article";

function App() {
    const firstArticle = `
    hjvdhbdjhdhdhd
    fhjdbdhd
    jnjndejjndnc
    `;
    const secondArticle = `
    hjvdhbdjhdhdhddjsj
    fhjdbdhd
    jnjndejjndnc
    `;

    return (
        <div>
            <Article
                name="Ahmed"
                email="ahmed@gmail.com"
                content={firstArticle}
            />
            <Article name="Ali" email="ali@gmail.com" content={secondArticle} />
            <Article name="Sayed" email="sayed@gmail.com" />
        </div>
    );
}

export default App;
