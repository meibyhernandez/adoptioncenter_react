import { Box } from '@mui/material';
import Header from './components/Header';

import List from './components/List';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import TipsCats from './components/TipsCats';



const App = () => (
    <Box sx={{ backgroundColor: '#F2F2F2' }}>
        <Navbar></Navbar>
        <Header></Header>
        <List></List>

        <Newsletter></Newsletter>
       
      
    </Box>
)   

export default App