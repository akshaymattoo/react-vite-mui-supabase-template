import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from '@mui/icons-material/Add';
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddDialog } from './AddDialog';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();
  
  const handleClickOpen = () => {
    console.log("handle click open");
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          
          <IconButton color="inherit" aria-label="open drawer">
            <HomeIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
           
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar> */}

<Paper
        sx={{ width:'100%',position: "fixed", top: 'auto', bottom: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={() => navigation("/home")}
          />
          <BottomNavigationAction
            label="Add"
            icon={ <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>}
            onClick={handleClickOpen}
          />
          <BottomNavigationAction
            label="Dashboard"
            icon={<AutoGraphIcon />}
            onClick={() => navigation("/dashboard")}
          />
        </BottomNavigation>
      </Paper>

      <AddDialog selectedValue={"value"} open={open} onClose={handleClose} />
    </React.Fragment>
  );
}