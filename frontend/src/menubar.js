import {Box, Fab} from '@mui/material';
import {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonIcon from '@mui/icons-material/Person';


function LeftIsland() {
    const [value, setValue] = useState(0);

    function handleChange(_event, newValue) {
        setValue(newValue);
    }

    const tabSx = {flex: 'auto', maxWidth: '100vw'}

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            sx={{
                margin: 'auto',
                width: '100vw',
            }}
        >
            <Tab sx={tabSx} label="Projekty" to='/' component={Link}/>
            <Tab sx={tabSx} label="Ogłoszenia" to="/news" component={Link}/>
        </Tabs>
    )
}

function LoginIcon() {

    return (
        <Fab color='primary' size='medium' sx={{position: "aboslute", top: "8px", right: "8px"}}>
            <PersonIcon/>
        </Fab>
    )
}

export default function Menubar() {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: "relative"
                }}
            >
                <LeftIsland/>
                <LoginIcon/>
            </Box>
            <Outlet />
        </>
    )
}
