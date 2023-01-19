import { Box } from "@mui/material";
import { Stack } from "@mui/system";

import { logo, backgroundImage } from "../utils/constants";

const Navbar = () => (
    <Stack direction="row"
        alignItems="center"
        p={2}
        sx={{ position: 'sticky', background: '#F2F2F2', top: 0, justifyContent: 'space-between' }}>
            <img src={logo} alt="logo" height={100}></img>     
    </Stack>
  
)

export default Navbar