import {ReactNode} from "react";

export function Subject({name, children} : {name : string, children : ReactNode} ) {
    return (
        <>
            <h2>{name}</h2>
            <p>{children}</p>
        </>
    );
}