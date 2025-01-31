import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {logOutUser} from "../reducers/user-slice.ts";

export function Homepage() {

    const dispatch = useDispatch();

    return (
        <>
            <h2>HomePage</h2>
            <Button onClick={()=>dispatch(logOutUser())}>Logout</Button>
        </>
    );
}