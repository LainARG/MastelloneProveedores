import React, {useEffect, useState} from 'react';
import {Typography, makeStyles, Box} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';

const CommonNoticesView = (props) => {

	const [notice, setNotice] = useState(null);
	const [step, setStep] = useState(0);

	useEffect(() => {
        GetNotice();
    }, []);

	function GetNotice() {
        setNotice(JSON.parse(window.localStorage.getItem("currentNotice")));
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
		btnActionStyle:{
			width:'200px',
			heigth:'35px',
			cursor:'pointer',
			textTransform: 'capitalize',
			marginLeft: '-0.5%'
		}
	}));
	
	const classes = useStyles();

	const goToPreviousPage = () => {
		history.goBack()
	}
	
	return (
		notice ?
		<Box m={6}>
			<Box onClick={goToPreviousPage} className={classes.backButton}>
				<Typography className={classes.bold}><ArrowBackIosIcon /> Volver</Typography>
			</Box>
			<Typography className={classes.title}>{notice.titulo_aviso}</Typography>
			<Box display="flex">
				<Typography variant="h6">{notice.cuerpo_aviso}</Typography>
			</Box>
		</Box>
		:
		<Box></Box>
	);
};

export default CommonNoticesView;




