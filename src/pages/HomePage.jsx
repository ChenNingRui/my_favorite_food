import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

import Drawer from '../components/Drawer';
import Grid from '../components/Grid';
import Menu from '../components/Menu';

import {
    AppBar,
    Search,
    SearchIconWrapper,
    StyledInputBase,
    Main,
    DrawerHeader
} from '../styleComponents/HomePageStyle';

function filterDatas(datas, input, group) {
    return datas.filter(item => {
        if(group === 'all') {
            if(input === '') return datas;
            else return item.name.toLowerCase().includes(input);
        }
        else {
            if(input !== '') return item.name.toLowerCase().includes(input) && item.group.toLowerCase().includes(group);
            else{
                return item.group.toLowerCase().includes(group);
            }
        }
    });
}

export default function HomePage({datas, setDatas, seletedItems, setSelectedItems}) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [filteredDatas, setFilteredDatas] = React.useState(datas);
    const [group, setGroup] = React.useState('all');
    const [input, setInput] = React.useState('');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleAnchorElOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    function handlerSearchChanged(event){
        setInput(event.target.value.toLowerCase());
    }

    React.useEffect(() => {
        let res = filterDatas(datas, input, group);
        setFilteredDatas(res);
    }, [datas, group, input])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ bgcolor: "#ce93d8" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign:'left', display: { xs: 'none', sm: 'block' } }}>
                        {'My Favorite Food'}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                        <IconButton size="large" color="inherit" onClick={handleAnchorElOpen}>
                            <FilterListIcon />
                        </IconButton>
                    </Box>
                    <Menu anchorEl={anchorEl} setAnchorEl={setAnchorEl} setGroup={setGroup} datas={datas}/>
                    <Search onChange={handlerSearchChanged} value={input}>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}/>
                    </Search>
                </Toolbar>
            </AppBar>
            <Drawer open={open} setOpen={setOpen} datas={datas} setDatas={setDatas} seletedItems={seletedItems} setSelectedItems={setSelectedItems}/>
            <Main open={open}>
                <DrawerHeader />
            </Main>
            <Grid datas={datas} filteredDatas={filteredDatas} seletedItems={seletedItems} setSelectedItems={setSelectedItems}/>
        </Box>
  );
}
