import * as React from "react";
import { useTheme, Theme, CSSObject } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Drawer from "@mui/material/Drawer";
import { ExitToApp, Person2, Settings } from "@mui/icons-material";
import NextLink from "next/link";
import { signOut } from "next-auth/react";

const drawerWidth = 200;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = ["data", "profile", "settings", ""];
const menuListTranslation = ["Data", "Profile", "Settings", "Sign out"];
const menuListIcon = [<EqualizerIcon />, <Person2 />, <Settings />, <ExitToApp />];

export default function SideMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = (text: string) => {
    text === "Sign out" ? signOut() : null;
    setOpen(false);
  }
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        }),
      }}
    >
      <div className="drawHeader">
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Divider />

      <List>
        {menuListTranslation.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <NextLink href={`/dashboard/${menuRouteList[index]}`}
            className="link"
             >
            <ListItemButton
            onClick={() => handleListItemButtonClick(text)}
            title={text}
            aria-label={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {menuListIcon[index]}
              </ListItemIcon>
              <ListItemText primary={text} sx={{color: theme.palette.text.primary, opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
