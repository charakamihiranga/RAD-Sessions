import './App.css'
import {createBrowserRouter} from "react-router";
import {Dashboard} from "./component/Dashboard.tsx";
import {RouterProvider} from "react-router/dom";
import {AddCustomer} from "./component/AddCustomer.tsx";
import {Error} from "./component/Error.tsx";
import {RouteLayout} from "./component/RouteLayout.tsx";


function App() {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RouteLayout/>,
            children: [
                {path: '/', element: <Dashboard/>},
                {path:'add', element: <AddCustomer/>}
            ]
        },
        {path: '*', element: <Error/>}
    ]);

    return (
        <>
            <RouterProvider router={routes} >
            </RouterProvider>
        </>
    )
}

export default App