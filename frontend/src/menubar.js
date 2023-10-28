import {Box} from '@mui/material';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function MyTab({label, to,  index}){
    return (
        <Tab 
            component={Link} 
            label={label} 
            to={to}
            id={index}
        />
    )
}

function LeftIsland() {
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        console.log(value);
        setValue(newValue);
    }

    return (
        <Tabs onChange={() => console.log("fuck me")} value={value}>
            <MyTab label="Projekty" to="/" index={0}/> 
            <MyTab label="Propozycje" to="/propositions" index={1}/> 
            <MyTab label="Ogłoszenia" to="/news" index={2}/> 
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
