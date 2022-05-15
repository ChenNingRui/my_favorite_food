import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { StyledRating } from '../styleComponents/PublicStyle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ClearIcon from '@mui/icons-material/Clear';

function findSelectedItem(data, items){
    for(let i = 0; i < items.length; i++){
        if(items[i].name === data.name) return i;
    }
    return -1;
}


export default function BasicListItem({data, datas, setDatas, seletedItems, setSelectedItems}) {

    function handleCleanBtnClick(){
        let arr = [...datas];
        let index = findSelectedItem(data, arr);
        arr[index].value = null;
        setDatas(arr);

        arr = seletedItems.filter(item => item.id !== data.id);
        setSelectedItems(arr);
    }

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={data.image}/>
            </ListItemAvatar>
            <ListItemText primary={data.name} />
            <StyledRating
                name="customized-color"
                value={data.value}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                readOnly/>
            <IconButton color="secondary" aria-label="remove item" onClick={handleCleanBtnClick}>
                <ClearIcon />
            </IconButton>
        </ListItem>
    );
}
