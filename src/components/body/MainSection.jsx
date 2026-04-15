import PostBox from "./PostBox";
import SideBar from "./side-bar/SideBar";

export default function MainSection() {
    return (
        <main>
            <section>
                <PostBox />
                <PostBox />
                <PostBox />
                <PostBox />
            </section>
            <SideBar />
        </main>
    );
}
