
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/RootLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {path: '', element: <Dashboard />},
        {path: '/add', element: <AddCustomer />},
      ]
    },
  ])
  return (
    <>
      < RouterProvider router={routes} />
    </>
  )
}

export default App
