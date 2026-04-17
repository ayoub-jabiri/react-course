import PostBox from "./PostBox";
import SideBar from "./side-bar/SideBar";

const showCategory = true;

export default function MainSection() {
    const articles = [
        {
            title: "Tarmeez Academy",
            body: "This is an education academy",
        },
        {
            title: "Hello World",
            body: "This is hello world text",
        },
        {
            title: "Post 3",
            body: "This is the body of the post 3",
        },
    ];

    const articlesList = articles.map((el, i) => (
        <PostBox key={i} title={el.title} body={el.body} />
    ));

    return (
        <main>
            <section>{articlesList}</section>
            <AppSideMenu />
        </main>
    );
}

function AppSideMenu() {
    if (showCategory) {
        return <SideBar />;
    } else {
        return null;
    }
}
