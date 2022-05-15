import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CardActionArea } from '@mui/material';
import { StyledRating } from '../styleComponents/PublicStyle';

function findSelectedItem(data, items){
    for(let i = 0; i < items.length; i++){
        if(items[i].name === data.name) return i;
    }
    return -1;
}

function handleRatingChanged(event, data, newValue, setValue, seletedItems, setSelectedItems){
    setValue(newValue);
    data.value = newValue;
    let index = findSelectedItem(data, seletedItems);

    if(index === -1 && newValue !== 0){
        setSelectedItems((preState) => [...preState, data]);
    }
    if(index !== -1){
        if(newValue){
            let arr = [...seletedItems];
            index = findSelectedItem(data, arr);
            arr[index].value = newValue;
            setSelectedItems(arr);
        }
        if(newValue === null){
            let arr = seletedItems.filter(item => item.id !== data.id);
            setSelectedItems(arr);
        }
    }
}

export default function ActionAreaCard({data, seletedItems, setSelectedItems}) {
    const [value, setValue] = React.useState(data.value);

    React.useEffect(() => {
        setValue(data.value);
    }, [data.value]);

    return (
    <Card sx={{ maxWidth: 300, m: 1}}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={data.image}
                alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.description}
            </Typography>
            <StyledRating
                name="customized-color"
                value={value}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                onChange={(event, newValue) => {
                    handleRatingChanged(event, data, newValue, setValue, seletedItems, setSelectedItems)
                }}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
