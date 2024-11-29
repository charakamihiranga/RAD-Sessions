export function Item(props:{name:string, desc:string}) {
    return (
        <>
            <h2> {props.name}</h2>
            <p>{props.desc}</p>
        </>
    );
}
