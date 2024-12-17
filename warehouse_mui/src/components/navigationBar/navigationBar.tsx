import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface NavigationBarProps {
    toggleSidebar: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ toggleSidebar }) => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleSidebar}
            >
                <MenuIcon />
            </IconButton>
            
            <Button color="inherit">Товары</Button>
            <Button color="inherit">Склады</Button>
            <Button color="inherit">О системе</Button>
            <Button color="inherit">Личный кабинет</Button>
        </Toolbar>
    </AppBar>
);

export default NavigationBar;