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
import HackMx from "../../Assets/hackmx-main.png";
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Inicio", "Registro"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}> */}
      <HeaderLogoImgContainer>
        <HeaderLogoImg src={HackMx} size="small" />
      </HeaderLogoImgContainer>
      {/* </Typography> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            <MenuIcon sx={{ color: theme.color.primary }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <HeaderLogoImgContainer>
              <HeaderLogoImg src={HackMx} />
            </HeaderLogoImgContainer>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) =>
              item === "Registro" ? (
                <Link to="/registro" key={item}>
                  <Button
                    sx={{
                      color: theme.color.primary,
                      fontWeight: "600",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              ) : (
                <Link to="/" key={item}>
                  <Button
                    key={item}
                    sx={{
                      color: theme.color.primary,
                      fontWeight: "600",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    {item}
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
