import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from '../components/Card';

function createData(filteredDatas, seletedItems, setSelectedItems){
  let components = [];
  for(let i = 0; i < filteredDatas.length; i++){
      components.push(<Card key={filteredDatas[i].id} data={filteredDatas[i]} seletedItems={seletedItems} setSelectedItems={setSelectedItems}/>)
  }
  return components;
}

export default function BasicGrid({filteredDatas, seletedItems, setSelectedItems}) {
  const gridItems = createData(filteredDatas, seletedItems, setSelectedItems);

  return (
    <Box sx={{ m: 1 }}>
      <Grid container>
        {gridItems}
      </Grid>
    </Box>
  );
}
