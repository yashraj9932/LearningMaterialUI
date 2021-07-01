import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "260px",
  },
});

const Drawer = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const itemList = [
    {
      text: "Home",
      icon: <InboxIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "About",
      icon: <MailIcon />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Contact",
      icon: <InboxIcon />,
      onClick: () => history.push("/contact"),
    },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemList.map((itemm, index) => {
          const { text, icon, onClick } = itemm;
          return (
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};
export default Drawer;
