import { ReactNode } from "react";

export function ButtonComponent(props: { children: ReactNode; onSelect: (value: ReactNode) => void }) {
    return (
        <button onClick={() => props.onSelect(props.children)}>
            {props.children}
        </button>
    );
}
