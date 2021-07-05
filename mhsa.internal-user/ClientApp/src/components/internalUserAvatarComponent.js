import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Button, Menu, MenuItem, makeStyles} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../resources/images/lain.jpg';
import '../resources/styles/userAvatarComponent.css';
import  {Link} from "react-router-dom";
import { positions } from '@material-ui/system';


const InternalUserAvatarComponent =(props)=>{

const [menuState, setMenuState] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);

    const handleUserMenu = (e) => {
        setAnchorEl(e.target);
        setMenuState(!menuState);
    
    }

const closeUserMenu = (e)=>{
    setMenuState(false);
}

    function sessionClose() {
        setMenuState(false);
        window.localStorage.removeItem("tknUsr");
        window.location = "/auth";
    }

const useStyles=makeStyles({
   menuItemStyle:{
   	display:'block',
   	color:'#000000',
   	minWidth:'125vm',
   	width:'125vm',
   	fontSize:'14px',
    '&:hover':{
     color:'#000000',
     textDecoration:'none'
    }
   },
   menuItemStyleActions:{
   	display:'block',
   	color:'#000000',
   	fontWeight:'bold',
   	minWidth:'125vm',
   	width:'125vm',
   	fontSize:'13px',
    '&:hover':{
     color:'#000000',
     textDecoration:'none'
    }
   }

});

const classes = useStyles();

return(
  
  <div className="userAvatarComponentContainer">


    <div className="userAvatarComponentUserDataContainer" onClick={handleUserMenu}>
    <Avatar alt="no image" src={image}/>
    
            <span className="userAvatarComponentUserName">{window.localStorage.getItem("iUserName")}</span>
    </div> 
    
    <Menu
         anchorEl={anchorEl}
         keepMounted
         open={menuState}
         onClose={closeUserMenu}
         className="userAvatarComponentUserMenu1"
     >
     <MenuItem onClick={closeUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Documentos rechazados"</b></MenuItem>
     <MenuItem onClick={closeUserMenu} className={classes.menuItemStyleActions}><Link to="/login/accountkeyformat" className={classes.menuItemStyleActions}>Cambio de clave</Link></MenuItem>
     <MenuItem onClick={sessionClose} className={classes.menuItemStyleActions}>Cerrar sesión</MenuItem>
     </Menu>

  </div>

    );
}


export default InternalUserAvatarComponent;