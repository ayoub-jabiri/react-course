import { Link } from "react-router";

export default function PostPage() {
    const posts = [
        {
            id: 1,
            title: "The first post",
            body: "jfsjdjjdf",
        },
        {
            id: 2,
            title: "The second post",
            body: "jfsjdjjdf",
        },
        {
            id: 3,
            title: "The third post",
            body: "jfsjdjjdf",
        },
    ];

    const postList = posts.map((post) => {
        return (
            <div key={post.id}>
                <Link to={`/post/${post.id}`}>
                    <h2 className="underline">{post.title}</h2>
                </Link>
                <hr className="block my-4" />
            </div>
        );
    });
    return (
        <div>
            <h1>This is the post page</h1>
            <div className="bg-gray-300 p-2 w-fit">{postList}</div>
        </div>
    );
}
