export default function Article({ name, email, children }) {
    const styles = {
        boxShadow: "0 0 10px #ddd",
        width: "300px",
        padding: "15px",
        margin: "15px auto",
    };

    return (
        <>
            <div style={styles}>
                <h1>{name}</h1>
                <h2>{email}</h2>
                <hr />
                <p>{children}</p>
            </div>
        </>
    );
}
