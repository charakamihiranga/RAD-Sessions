import './App.css';
import {Item} from "./component/Item.tsx";
import {itemList} from "./Item.ts";


function App() {

    const itemArray = [];

    for (const item of itemList) {
        itemArray.push(<Item name={item.name} desc={item.desc} />);
    }

  return (
      <>
      {/* {*/}
      {/*  itemList.map((item, index) => {*/}
      {/*    return <Item key={index} name={item.name} desc={item.desc} />;*/}
      {/*  })*/}
      {/*}*/}
        {itemArray}

      </>
  );
}

export default App;
