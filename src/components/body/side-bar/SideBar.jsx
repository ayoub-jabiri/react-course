import TagButton from "./TagButton";

export default function SideBar() {
    const tags = ["html", "css", "js"];

    const tagList = tags.map((el, i) => <TagButton key={i} tagName={el} />);
    return <aside>{tagList}</aside>;
}
