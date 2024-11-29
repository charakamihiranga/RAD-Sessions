export function ButtonComponent(props:{children: ReactNode, onselect:(value: ReactNode) => void}) {
    return (
        <>
            <button onClick={() => {props.onselect(props.children)}}>{props.children}</button>
        </>
    );
}

import {ReactNode} from "react";
