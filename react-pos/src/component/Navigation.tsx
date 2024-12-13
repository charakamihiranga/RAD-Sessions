import {Link} from "react-router-dom";


export function Navigation() {
    return (
        <>
            <ul>
                <Link to="/" >Home</Link>
                <Link to="add">  add customer</Link>
            </ul>
        </>
    );
}