import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '../components/ListItem';

function createItems(datas, setDatas, seletedItems, setSelectedItems){
  let res = [];
  for(let i = 0; i < seletedItems.length; i++){
    res.push(
      <ListItem key={seletedItems[i].id} datas={datas} setDatas={setDatas} data={seletedItems[i]} seletedItems={seletedItems} setSelectedItems={setSelectedItems}/>
    );
  }
  return res;
}

export default function FolderList({datas, setDatas, seletedItems, setSelectedItems}) {
  const items = createItems(datas, setDatas, seletedItems, setSelectedItems);
  
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items}
    </List>
  );
}
