import { useParams } from "react-router";

export default function PostDetails() {
    const { postId } = useParams();

    return (
        <div>
            <h1>This is the post details</h1>
        </div>
    );
}
