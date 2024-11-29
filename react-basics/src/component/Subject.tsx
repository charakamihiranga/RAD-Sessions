export function Subject(props : {name : string, children : string}) {
    return (
        <>
            <h1>{props.name}</h1>
            <p>{props.children}</p>
        </>
    );
}