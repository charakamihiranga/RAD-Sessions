import {ReactNode} from "react";

export function ButtonComponent(props : {children:ReactNode}) { // using ReactNode to accept any type of children (string, number, element, etc)
    return (
        <>
            <button>{props.children}</button>
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