import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../resources/styles/documentBody.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

export default function DocumentFilterMenu(props){
 
    const { openMenu, anchorEl} = props;

  const useStyles = makeStyles({
    documentFilterMenu: {
          display: 'inline-block',
          maxWidth: '300px',
          minWidth: '300px'

    },
    documentFilterMenulegend: {
        display: 'block',
        maxWidth:'70%',
        marginLeft: '12%',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontSize:'10'
    },
    documentFilterMenuSelect: {
        display:'block',
        border: 'none',
        borderBottom: '1px solid #000000',
        marginLeft: '12%',
        maxWidth: '200px',
        marginBottom:'10px'
      },
      documentFilterMenulegend1: {
          display: 'block',
          maxWidth: '70%',
          marginLeft: '12%',
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          fontSize: '10'
      },
      documentFilterMenuSelect1: {
          display: 'block',
          border: 'none',
          borderBottom: '1px solid #000000',
          marginLeft: '12%',
          marginRight: '5%',
          maxWidth: '200px',
          marginBottom: '0px'
      },
      documentFilterMenuBtn: {
          display: 'inline-block',
          width: '90px',
          height: '30px',
          marginLeft: '12%',
          border: '1px solid #009639',
          backgroundColor: 'white',
          fontSize: '14px',
          color: '#009639',
          borderRadius: '5px',
          cursor:'pointer'
      },
      documentFilterMenuBtn1: {
          display: 'inline-block',
          marginLeft: '15px',
          marginTop:'2px',
          fontWeight: 'bold'
      },
      documentFilterMenuBtn2: {
          display: 'inline-block',
          width: '90px',
          height: '30px',
          marginLeft: '10px',
          border: '1px solid #009639',
          backgroundColor: '#009639',
          fontSize: '14px',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer'
      },
      documentFilterMenuBtn3: {
          display: 'inline-block',
          marginLeft: '24px',
          marginTop: '2px',
          fontWeight: 'bold'
      },
      documentFilterMenuWidth: {
          display: 'inline-block',
          width: '275px',
          height: '10px',
      },

})

const classes = useStyles();

const actionSend = (e)=>{
   e.preventDefault();
   window.location="/login/accountkeyforgot";
}


    const menuControl = () => {
        console.log("ok1")
    }

    const menuIsOpen = () => {
        console.log("ok2")
    }

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#009639',
            },
            secondary: {
                main: '#009639',
            },
        },
    });

    const age = "nepo";


 return(

 
 

     <div className="documentFilterMenuContainer">

         

             <Menu
                 anchorEl={anchorEl}
                 keepMounted
                 open={openMenu}
                 className={classes.documentFilterMenu}
                 
              >

                <span className={classes.documentFilterMenulegend}>Tipo de documentacion</span>
             
                 <Select 
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 className={classes.documentFilterMenuSelect}
                 
                  >
                 <MenuItem>Todos</MenuItem>
                 </Select>
                 
                 <span className={classes.documentFilterMenulegend1}>Estado</span>

                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 className={classes.documentFilterMenuSelect1}
                  >
                 <MenuItem>A cobrar</MenuItem>
                 
                 </Select>
                 

             <ThemeProvider theme={theme}>
                 <p className={classes.documentFilterMenuWidth}></p>
             <span className={classes.documentFilterMenuBtn}>
                     <span className={classes.documentFilterMenuBtn1}>Cancelar</span>
             </span>
                 <span className={classes.documentFilterMenuBtn2}>
                     <span className={classes.documentFilterMenuBtn3}>Filtrar</span>
                 </span>
             </ThemeProvider>

         </Menu>


         </div>  

 



);


 
}