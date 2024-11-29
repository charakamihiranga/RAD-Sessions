export function ButtonComponent(props : {name : string}) {
    return (
        <>
            <button>{props.name}</button>
        </>
    )
}

export function SmallButton({name} : {name : string}) {
    return (
        <>
            <button>{name}</button>
        </>
    )
}