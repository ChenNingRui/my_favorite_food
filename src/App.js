import './App.css';
import * as React from 'react';
import resource from './resource/data.json';
import HomePage from './pages/HomePage';

function createData(data){
  let res = [];
  for(let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].items.length; j++){
      let item = JSON.parse(JSON.stringify(data[i].items[j]));
      item.value = null;
      item.group = data[i].name;
      res.push(item);
    }
  }
  return res;
}

function App() {
  let data = createData(resource);
  const [seletedItems, setSelectedItems] = React.useState([]);
  const [datas, setDatas] = React.useState(data);

  return (
    <div className="App">
      <HomePage datas={datas} setDatas={setDatas} seletedItems={seletedItems} setSelectedItems={setSelectedItems}></HomePage>
    </div>
  );
}

export default App;
