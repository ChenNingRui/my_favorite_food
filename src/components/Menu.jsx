import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function createItems(datas, callback){
  let res = [<MenuItem key={0} onClick={callback}>{'all'}</MenuItem>];
  let groups = [];

  for(let i = 1; i < datas.length; i++){
    if(!groups.includes(datas[i].group)){
      groups.push(datas[i].group);
      res.push(<MenuItem key={datas[i].group} onClick={callback}>{datas[i].group}</MenuItem>);
    }
  }
  return res;
}

export default function BasicMenu({anchorEl, setAnchorEl, datas, setGroup}) {
  const open = Boolean(anchorEl);
  const items = createItems(datas);

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const handleClick = (event,value) => {
    setGroup(event.target.innerText);
    setAnchorEl(null);
  }

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClick}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items}
      </Menu>
    </div>
  );
}
