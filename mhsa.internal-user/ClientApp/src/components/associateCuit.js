import React, {useEffect, useState} from 'react';
import {Typography, makeStyles, Box, StepLabel, TextField, Button} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';

const AssociateCuit = (props) => {
	const [cuit, setCuit] = useState('');
	const handleChange = (event) => {
		setCuit(event.target.value);
	};

	const [activeStep, setActiveStep] = useState(0);
	const steps = [0,1];

	const [user, setUser] = useState(null);
	// const user = {
	// 	razon_social: 'PURALACTEA S.A',
	// 	cuit: '27-12345678-1',
	// 	nombre_y_apellido_usuario: 'Lauren Bishop',
	// 	fecha_alta: '02/04/2021',
	// }

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
		},
		stepLabel: {
			'& .MuiSvgIcon-root': {
				fontSize: '3rem'
			}
		},
		stepper: {
			width: '25rem',
		},
		textField:{
			width: '25rem',
			'& .MuiInputBase-input':{
				backgroundColor: '#F4F4F4',
			}
		},
		label: {
			color: '#666',
		}
	}));
	
	const classes = useStyles();

	const goToPreviousPage = () => {
		history.goBack()
	}
	
	return (
		user ?
		<Box m={6}>
			<Typography className={classes.title}>Asociar CUIT.</Typography>
			<Box my={2} display="flex" justifyContent="center">
				<Stepper className={classes.stepper} activeStep={activeStep}>
					{steps.map((label, index) => {
					return (
						<Step key={label}>
							<StepLabel className={classes.stepLabel}/>
						</Step>
					);
					})}
				</Stepper>
			</Box>
			<Box display="flex">
				<Box mr={1}>
					<Typography className={classes.bold} variant="h6">Usuario autenticado desde WASS:</Typography>
				</Box>
				<Typography variant="h6">{user.mail}</Typography>
			</Box>
			<Box display="flex">
				<Box mr={1}>
					<Typography className={classes.bold} variant="h6">Mail:</Typography>
				</Box>
				<Typography variant="h6">{user.fecha_registro}</Typography>
			</Box>
			<Box>
				<Typography className={classes.bold} variant="h6">Cuestionario para asociar CUIT:</Typography>
			</Box>
			<Box mt={1} display="flex" flexDirection="column">
				<Typography className={classes.label} variant="body1">CUIT</Typography>
				<TextField className={classes.textField} value={cuit} onChange={handleChange} size="medium"/>
			</Box>
			<Box text mt={12} display="flex" justifyContent="center">
				<Box mr={1}>
					<Button onClick={goToPreviousPage} size="large" color="primary" variant="outlined">Cancelar</Button>
				</Box>
				<Box ml={1}>
					<Button size="large" color="primary" variant="contained" disabled={cuit == ''}>Continuar</Button>
				</Box>
			</Box>
		</Box>
		:
		<Box></Box>
	);
};

export default AssociateCuit;




