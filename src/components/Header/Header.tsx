import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { HeaderLogoImg, HeaderLogoImgContainer } from "./styles";
import HackMx from "../../Assets/hackMX.png";
import theme from "../../theme/theme";
import { Link, useLocation } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {name: "Inicio", route: '/'}, 
  {name: "Registro", route: '/registro'}];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/">
        <HeaderLogoImgContainer>
          <HeaderLogoImg src={HackMx} size="small" />
        </HeaderLogoImgContainer>
      </Link>
      <Divider />
      <List>
        {
          location.pathname === "/registro" ? (
            <Link 
              to="/" 
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary="Inicio" />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <Link 
              to="/registro"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary="Registro" />
                </ListItemButton>
              </ListItem>
            </Link>
          )
        }
      </List>
    </Box >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ position: "static", backgroundColor: theme.color.grays.l5 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: theme.color.mainBlue }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Popins, sans-serif",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link to="/">
              <HeaderLogoImgContainer>
                <HeaderLogoImg src={HackMx} />
              </HeaderLogoImgContainer>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) =>
              item.name === "Registro" ? (
                <Link to="/registro" key={item.name}>
                  <Button
                    sx={{
                      color: theme.color.mainBlue,
                      fontWeight: "600",
                      fontSize: "16px",
                      cursor: "pointer",
                      fontFamily: "Popins, sans-serif",
                      display: location.pathname === "/" ? null : "none",
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              ) : (
                <Link to="/" key={item.name}>
                  <Button
                    key={item.name}
                    sx={{
                      color: theme.color.mainBlue,
                      fontWeight: "600",
                      fontSize: "16px",
                      cursor: "pointer",
                      fontFamily: "Popins, sans-serif",
                      display: location.pathname === "/registro" ? null : "none",
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
