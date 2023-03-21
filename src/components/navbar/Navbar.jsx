import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Box } from "@mui/system";


const navLinks = [
   {
    title: "Home", path: "#", icon: <InboxIcon/>
   },
   {
    title: "Login", path: "#login", icon: <LoginIcon/>
   },
   {
    title: "Register", path: "#register", icon: <AppRegistrationIcon/>
   },
]

export default function Navbar(){

    const [open, setOpen] = useState(false)

    return(
        <>
            <AppBar position="fixed">
                <Toolbar >
                    <IconButton 
                    color="inherit" 
                    size="large"
                    onClick={() =>  setOpen(true)}
                    sx={{display:{xs: "flex" ,sm: "none"}}}
                    edge="start">
                    <MenuIcon/>
                    </IconButton>
                    <Typography 
                    variant="h6"
                    sx={{flexGrow: 1}}>Admin</Typography>

                        <Box sx={{display: {xs: "none", sm: "block" }}}>

                            {navLinks.map(item => (
                                <Button 
                                color="inherit" 
                                key={item.title}
                                component="a"
                                href={item.path}>{item.title}</Button>
                            ))}
                     </Box>
                </Toolbar>
            </AppBar>

            <Drawer
            open={open}
            anchor="left"
            onClose={()=> setOpen(false)}
            sx={{display:{xs: "flex" ,sm: "none"}}}>
            <NavListDrawer navLinks={navLinks}/>
            
            </Drawer>
            

        </>
    )
}