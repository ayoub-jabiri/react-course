export default function PostBox({ title, body }) {
    return (
        <div className={"post-box"}>
            <h2 className="text-2xl">{title}</h2>
            <hr className="my-2" />
            <p>{body}</p>
        </div>
    );
}
