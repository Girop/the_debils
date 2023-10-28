import {Button, Box} from '@mui/material';
import { Link } from 'react-router-dom';


function LeftIsland() {
    
    return (
        <Box>
         <Link to='/' >Projekty</Link>
         <Link to= '/propositions' >Propozycje</Link>
         <Link to = '/news' >Wiadomości</Link>
        </Box>
    )
}

export default function Menubar() {
    return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
            <LeftIsland />
        </Box>
    )
}
