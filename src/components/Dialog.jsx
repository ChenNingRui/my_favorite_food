import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';


function createText(seletedItems){
    let res = [];
    for(let i = 0; i < seletedItems.length; i++){
        let str = seletedItems[i].name + " : " + seletedItems[i].value;
        res.push(<Typography key={seletedItems[i].name}>{str}</Typography>);
    }

    return res;
}

export default function AlertDialog({open, setOpen, seletedItems}) {

  const handleClose = () => {
    setOpen(false);
  };

  const text = createText(seletedItems);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"My Favorite Food"}
        </DialogTitle>
        <DialogContent>
            <List>{text}</List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {'Close'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
