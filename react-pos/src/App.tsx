import './App.css'
import {createBrowserRouter} from "react-router";
import {Dashboard} from "./component/Dashboard.tsx";
import {RouterProvider} from "react-router/dom";
import {AddCustomer} from "./component/AddCustomer.tsx";
import {Error} from "./component/Error.tsx";


function App() {

    const routes = createBrowserRouter([
        {path: '/', element: <Dashboard/>},
        {path:'add', element: <AddCustomer/>},
        {path: '*', element: <Error/>}
    ])

    return (
        <>
            <RouterProvider router={routes} >
            </RouterProvider>
        </>
    )
}

export default App