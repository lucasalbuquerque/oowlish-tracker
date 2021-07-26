import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import sidebarConfig from './SidebarConfig';
import { useLocation } from 'react-router-dom'

const DashboardSidebar: React.FC = () => {

  const { pathname } = useLocation();
  
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sidebarConfig.map(({ title, path, icon }) => (
          <ListItem button key={title} component="a" href={path} 
            selected={path === pathname}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              {icon}
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
      <Box
        component="nav"
        sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
  );
}

export default DashboardSidebar;