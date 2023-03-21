

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Product from '../../components/Product';



export default function Home() {

return (

  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
       
        <Typography paragraph>
          Dash
        </Typography>
        <Product/>
      </Box>
)


}

