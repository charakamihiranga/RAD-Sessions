import './App.css';
import Item from "./component/ButtonComponent.tsx";

function App() {
  const itemList = [
    { name: 'item1', desc: 'desc1' },
    { name: 'item2', desc: 'desc2' },
    { name: 'item3', desc: 'desc3' },
    { name: 'item4', desc: 'desc4' },
    { name: 'item5', desc: 'desc5' }
  ];

  return (
      <>
        <Item name={itemList[0].name} desc={itemList[0].desc} />
        <Item name={itemList[1].name} desc={itemList[1].desc} />
        <Item name={itemList[2].name} desc={itemList[2].desc} />
      </>
  );
}

export default App;
