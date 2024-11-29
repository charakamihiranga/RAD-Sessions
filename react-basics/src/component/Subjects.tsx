import {ReactNode} from "react";

export function Subjects(props:{children: ReactNode, onselect:any}) {

    return (
        <>
            <button onClick={() => {
                props.onselect(props.children)
            }}>{props.children}</button>
        </>
    );
}