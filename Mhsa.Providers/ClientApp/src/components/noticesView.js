import React, {useEffect, useState} from 'react';
import {Typography, makeStyles, Box} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment';
import { Modal } from '@material-ui/core';

const NoticesView = (props) => {

	const [notice, setNotice] = useState(null);
	const [step, setStep] = useState(0);
	const [checked, setChecked] = useState(false);
    const [modal, setModal] = useState(false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
        GetNotice();
    }, []);

	function GetNotice() {
        setNotice(JSON.parse(window.localStorage.getItem("currentNotice")));
    }

	const NextStep = () => {
		setStep(step + 1);
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

	const SuccessModal = (
		<div className="modalStyle">
	
			<h2 className="modalTitleStyle">¡Listo!</h2>
			<span className="modalNormalFontStyle">Conformidad brindada.</span>
			
			<button className="modalBtnStyle" onClick={() => closeModal()}>Continuar</button>
			
	
		</div>
	);

	const ConformitySuccessModal = (props) => {
        return (
            <div>

                <Modal
                    open={ modal }
                    onClose={ goToPreviousPage }
                >
                    { SuccessModal }

                </Modal>
            </div>
        );
    }
	
	const classes = useStyles();

	const goToPreviousPage = () => {
		history.goBack()
	}
	
	return (
		notice ?
		<Box m={6}>
			{step == 0 &&
				<Box>
					<Box onClick={goToPreviousPage} className={classes.backButton}>
						<Typography className={classes.bold}><ArrowBackIosIcon /> Volver</Typography>
					</Box>
					<Typography className={classes.title}>{notice.titulo_aviso}</Typography>
					<Box display="flex">
						<Typography variant="h6">{notice.cuerpo_aviso}</Typography>
					</Box>
					<Button className={classes.btnActionStyle} onClick={NextStep} color="primary" variant="contained" disableElevation>
						<b>Brindar conformidad</b>
					</Button>
				</Box>
			}
			{step == 1 &&
				<Box>
					<Box onClick={goToPreviousPage} className={classes.backButton}>
						<Typography className={classes.bold}><ArrowBackIosIcon /> Volver</Typography>
					</Box>
					<Typography className={classes.title}>Brindar conformidad</Typography>
					<Box display="flex">
						<Checkbox
							checked={checked}
							onChange={handleChange}
						/>
						<Box ml={1}>
							<Typography variant="h6">Confirme que vio el video.</Typography>
						</Box>
					</Box>
					<Typography variant="h6">Descargue el adjunto y fírmelo.</Typography>
					<Typography variant="h6">Por favor suba el PDF firmado.</Typography>
					<Box display="flex">
						<Button className={classes.btnActionStyle} onClick={() => 1} color="primary" variant="outlined" disableElevation>
							<b>Seleccionar archivo</b>
						</Button>
					</Box>
					<Button className={classes.btnActionStyle} disabled={!checked} onClick={() => setModal(true)} color="primary" variant="contained" disableElevation>
						<b>Finalizar</b>
					</Button>
					<ConformitySuccessModal />
				</Box>
			}
		</Box>
		:
		<Box></Box>
	);
};

export default NoticesView;




