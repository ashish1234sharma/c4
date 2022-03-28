import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Link
                className="navbarHome"
                style={{ textDecoration: "none" }}
                to={"/"}
              >
                <Typography variant="h4" component="div" sx={{ color: "#FFF" }}>
                  HOME
                </Typography>
              </Link>
              <Link
                className="navbarLoginSignUp"
                style={{ textDecoration: "none" }}
                to={"/loginsignup"}
              >
                <Typography variant="h6" component="div" sx={{ color: "#FFF" }}>
                  Login / Sign Up
                </Typography>
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
