import { AppBar, Toolbar, Box, Typography } from '@mui/material';

export default function Menubar() {
    return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '20%' }}>
            {/* Small island contents */}
          </Box>
          <Box sx={{ width: '80%' }}>
            {/* Larger island contents */}
          </Box>
        </Box>
    )
}
