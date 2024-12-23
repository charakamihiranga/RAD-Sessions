
import './App.css';
import {AddCustomer} from "./components/AddCustomer.tsx";
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {ViewCustomers} from "./components/ViewCustomers.tsx";



function App() {


    return (

         <CustomerProvider>
         <AddCustomer></AddCustomer>
         <ViewCustomers/>
         </CustomerProvider>
    );
}

export default App;