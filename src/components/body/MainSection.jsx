import PostBox from "./PostBox";
import SideBar from "./side-bar/SideBar";

export default function MainSection() {
    return (
        <main>
            <section>
                <PostBox>
                    <h2 className="text-2xl">20</h2>
                    <h3>Tarmeez Academy</h3>
                    <hr className="my-2" />
                    <p>This is an education academy</p>
                </PostBox>
                <PostBox>
                    <h2 className="text-2xl">Hello World</h2>
                    <hr className="my-2" />
                    <p>This is hello world text</p>
                </PostBox>
                <PostBox>
                    <h2 className="text-2xl">Post 3</h2>
                    <hr className="my-2" />
                    <p>This is the body of the post 3</p>
                </PostBox>
            </section>
            <SideBar />
        </main>
    );
}
