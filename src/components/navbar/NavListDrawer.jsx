import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavListDrawer({navLinks}){
    return(
        <Box sx={{width: 250 }}>

           {/* <nav>
                <List>
                    <ListItem>
                    <ListItemIcon>
                         <InboxIcon/>
                    </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItem>
                    <ListItem>
                    <ListItemIcon>
                         <SettingsIcon/>
                    </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                </List>
            </nav>*/}
            
            <Divider/>

            <nav>
                <List>
                    {
                        navLinks.map(item =>(
                            <ListItem disablePadding key={item.title}>
                            <ListItemButton
                            component="a"
                            href={item.path}>
                                <ListItemIcon> {item.icon}</ListItemIcon>
                                <ListItemText primary={item.title}/>
                            </ListItemButton>
                            </ListItem>
                        ))
                    }
                  
                </List>
            </nav>

        </Box>
    )
}