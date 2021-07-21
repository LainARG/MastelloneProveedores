import React, {useEffect, useState} from 'react';
import {Typography, makeStyles, Box} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router'
import moment from 'moment';

const InternalUserView = (props) => {

	const [user, setUser] = useState(null);

	useEffect(() => {
        GetUser();
    }, []);

	function GetUser() {
        setUser(JSON.parse(window.localStorage.getItem("currentProvider")));
    }

	const history = useHistory();
	
	const useStyles = makeStyles(() => ({
		bold:{
			fontWeight: 'bold',
		},
		title:{
			fontWeight: 'bold',
			fontSize: '1.8rem',
		},
		backButton:{
			display: 'inline-block',
			marginBottom: 16,
			cursor:"pointer",
		}
	}));
	
	const classes = useStyles();

	const goToPreviousPage = () => {
		history.goBack()
	}
	
	return (
		user ?
		<Box m={6}>
			<Box onClick={goToPreviousPage} className={classes.backButton}>
				<Typography className={classes.bold}><ArrowBackIosIcon /> Volver</Typography>
			</Box>
			<Typography className={classes.title}>Detalle del usuario interno.</Typography>
			<Box display="flex">
				<Box mr={1}>
					<Typography className={classes.bold} variant="h6">Nombre:</Typography>
				</Box>
				<Typography variant="h6">{}</Typography>
			</Box>
			<Box display="flex">
				<Box mr={1}>
					<Typography className={classes.bold} variant="h6">Apellido:</Typography>
				</Box>
				<Typography variant="h6">{}</Typography>
			</Box>
			<Box display="flex">
				<Box mr={1}>
					<Typography className={classes.bold} variant="h6">Proveedores asignados:</Typography>
				</Box>
				<Typography variant="h6">{user.razon_social}</Typography>
			</Box>
			<Box display="flex">
				<Box mr={1}>
					<Typography className={classes.bold} variant="h6">Areas asociadas a avisos:</Typography>
				</Box>
				<Typography variant="h6">{}</Typography>
			</Box>
			<Box display="flex">
				<Box mr={1}>
					<Typography className={classes.bold} variant="h6">Fecha de alta:</Typography>
				</Box>
				<Typography variant="h6">{moment(user.fecha_registro).format('DD/MM/YYYY')}</Typography>
				<Box mx={1}>
					<Typography className={classes.bold} variant="h6">Hora:</Typography>
				</Box>
				<Typography variant="h6">{moment(user.fecha_registro).format('LTS')}</Typography>
			</Box>
		</Box>
		:
		<Box></Box>
	);
};

export default InternalUserView;




