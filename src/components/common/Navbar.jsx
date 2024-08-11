import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Customtypography from "../Customtypography";
import Custombutton from "../Custombutton";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgb(223, 223, 223)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Toolbar disableGutters>
        <Customtypography
          name="LOGO"
          fontWeight={400}
          letterSpacing=".3rem"
          variant="h6"
        />

        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "center", pl: 9 }}
        >
          <Custombutton name="Store" />
          <Custombutton name="Collection" />
          <Custombutton name="Explore" />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Customtypography
            name="My Account"
            fontWeight={400}
            letterSpacing="0rem"
            varient="subtitle"
            mr={3}
          />
          <Customtypography
            name="My cart"
            fontWeight={400}
            letterSpacing="0rem"
            varient="subtitle"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
