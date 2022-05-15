import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DrawerHeader } from '../styleComponents/DrawerStyle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

import Dialog from './Dialog';

import List from '../components/List';

const drawerWidth = 350;

const theme = createTheme({
  palette: {
    pink: {
      main: '#ce93d8',
      contrastText: '#fff',
    },
  },
});

export default function PersistentDrawerLeft({open, datas, setDatas, setOpen, seletedItems, setSelectedItems}) {
  const [openDialog, setOpenDialog] = React.useState(false);
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleClick(){
    setOpenDialog(true);
  }

  return (
    <Box>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          display: 'flex',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <List datas={datas} setDatas={setDatas} seletedItems={seletedItems} setSelectedItems={setSelectedItems}/>
          { seletedItems.length !== 0 && (
            <ThemeProvider theme={theme}>
              <Button variant="contained" sx={{m:2}} color="pink" onClick={handleClick}>{"Comfirm"}</Button>
            </ThemeProvider>)}
        </Box>
      </Drawer>
      <Dialog open={openDialog} setOpen={setOpenDialog} seletedItems={seletedItems}/>
    </Box>
  );
}
