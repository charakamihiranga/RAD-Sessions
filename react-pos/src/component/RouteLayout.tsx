import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router";

export function RouteLayout() {
    return (
        <>
            <Navigation />
            <Outlet></Outlet>
        </>
    );
}