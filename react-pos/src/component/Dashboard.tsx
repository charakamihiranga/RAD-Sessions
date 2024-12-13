import {Link} from "react-router-dom";

export function Dashboard() {
    return (
        <>
            <h3>Dashboard</h3>
            <Link to="/add">Add Customer</Link>
        </>
    );
}