import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Button, Menu, MenuItem, makeStyles} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../resources/images/lain.jpg';
import '../resources/styles/userAvatarComponent.css';
import  {Link} from "react-router-dom";
import { positions } from '@material-ui/system';


const UserAvatarComponent =()=>{

const [menuState, setMenuState] = useState(false);
const [anchorEl, setAnchorEl] = useState(false)

const handleUserMenu = (e)=>{
  setMenuState(!menuState);
}

const closeUserMenu = (e)=>{
  setMenuState(false);
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
    
     <span className="userAvatarComponentUserName">Terry Wagner</span>
    </div> 
    
    <Menu
         anchorEl={anchorEl}
         keepMounted
         open={menuState}
         onClose={closeUserMenu}
         className="userAvatarComponentUserMenu"
     >
     <MenuItem onClick={closeUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Pagos"</b></MenuItem>
     <MenuItem onClick={closeUserMenu} className={classes.menuItemStyle}>Novedades de la sección <b>"Avisos"</b></MenuItem>
     <MenuItem onClick={closeUserMenu} className={classes.menuItemStyleActions}><Link to="/login/accountkeyformat" className={classes.menuItemStyleActions}>Cambio de clave</Link></MenuItem>
     <MenuItem onClick={closeUserMenu} className={classes.menuItemStyleActions}>Cerrar sesión</MenuItem>
     </Menu>

  </div>

    );
}


export default UserAvatarComponent;