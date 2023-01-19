import { Box } from "@mui/material";
import { Stack } from "@mui/system";

import { logo, backgroundImage } from "../utils/constants";

const Navbar = () => (
    <Stack direction="row"
        alignItems="center"
        p={2}
        sx={{ position: 'sticky', background: '#F2F2F2', top: 0, justifyContent: 'space-between' }}>
            <img src={logo} alt="logo" height={100}></img>     
            <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
    </Stack>
  
)

export default Navbar