import {Box} from '@mui/material';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


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
            <Tab sx={tabSx} label="Propozycje" to="/propositions" component={Link}/>     
            <Tab sx={tabSx} label="Ogłoszenia" to="/news" component={Link}/>     
        </Tabs>
    )
}

export default function Menubar() {
    return (
        <Box
          sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
            <LeftIsland />
        </Box>
    )
}
