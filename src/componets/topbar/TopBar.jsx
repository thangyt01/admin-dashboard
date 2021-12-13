import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import PublicIcon from '@mui/icons-material/Public'
import SettingsIcon from '@mui/icons-material/Settings'
import Badge from '@mui/material/Badge'
import React from 'react'
import "./topbar.css"
import {Link} from 'react-router-dom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'


const TopBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link style={{textDecoration: 'none', color:'black'}} to="/">
                        <span className="logo">Admin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="badgeContainer">
                        <Badge badgeContent={4} color="primary">
                            <NotificationsNoneIcon color="action" />
                        </Badge>
                    </div>
                    <div className="badgeContainer">
                        <Badge badgeContent={4} color="primary">
                            <PublicIcon color="action" />
                        </Badge>
                    </div>
                    <div className="badgeContainer">
                        <SettingsIcon/>
                    </div>
                    <img onClick={handleClick} src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/250384275_3005461373060797_9052031117227489754_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8bL8dLp7784AX8-3x0b&_nc_ht=scontent.fhan4-1.fna&oh=87cb36479958129449ffcd0ca73adef1&oe=61B60F9A" alt="" className="topAvatar" />
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link style={{textDecoration: 'none', color:'black'}} to="/logout">Log out</Link>
                        </MenuItem>
                    </Menu>      
                </div>
            </div>
        </div>
    )
}

export default TopBar
