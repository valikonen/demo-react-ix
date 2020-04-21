import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const Header = (props) => {
  const [sideBar, setSidebar] = useState(false);

  useEffect(() => {
  }, [sideBar]);

  const toggleSideBar = () => {
    setSidebar(oldValue => !oldValue)
  }

  return (
    <div>
      <button onClick={toggleSideBar}>Side</button>
      
      {sideBar&&(<List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>)}
    </div>
  )
}


export default Header;