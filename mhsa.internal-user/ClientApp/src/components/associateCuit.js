import React, {useEffect, useState} from 'react';
import {Typography, makeStyles, Box, StepLabel, TextField, Button, TableBody,
	TableCell,
	TableRow,
	TableContainer,
	TableHead,
	Table} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ProvidersContext from "../contexts/providersContext";
import DocumentsContext from "../contexts/documentsContext";
import { useHistory } from 'react-router';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import moment from 'moment'

const AssociateCuit = (props) => {
	const [cuit, setCuit] = useState('');
	const [provider, setProvider] = useState({})
	const [documents, setDocuments] = useState([])
	const [allProviders, setAllProviders] = useState([]);
	const [allDocuments, setAllDocuments] = useState([]);
	const handleChange = (event) => {
		setCuit(event.target.value);
	};

	const [activeStep, setActiveStep] = useState(0);

	const [user, setUser] = useState(null);

	useEffect(() => {
        getUser();
		ProvidersContext.fetchProviders().then((e) => {
			setAllProviders(e);
		});
		DocumentsContext.fetchDocuments().then((d) => {
			setAllDocuments(d)
		})
    }, []);

	const nextStep = () => {
		const prov = allProviders.find(provider => provider.cuit == cuit) || {}
		setProvider(prov)
		setDocuments(allDocuments.filter(doc => doc.id_proveedor == prov.id_proveedor).slice(-5))
		setActiveStep(1)
	}

	const getUser = () => {
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

	const columns = [
		{
			id: "fecha_documento",
			label: "Fecha documento",
			width: 150,
			align: "left",
			format: (value) => value.toLocaleString("en-US"),
		},
		{
			id: "numero",
			label: "Numero",
			width: 150,
			align: "center",
			format: (value) => value.toLocaleString("en-US"),
		},
		{
			id: "nota_pedido",
			label: "Nota pedido",
			width: 150,
			align: "center",
			format: (value) => value.toLocaleString("en-US"),
		},
		{
			id: "estado",
			label: "Estado",
			width: 150,
			align: "center",
			format: (value) => value.toLocaleString("en-US"),
		},
		{
			id: "importe",
			label: "Importe",
			width: 150,
			align: "right",
			format: (value) => value.toLocaleString("en-US"),
		},
	  ];
	
	return (
		user ?
		<Box m={6}>
			<Typography className={classes.title}>Asociar CUIT.</Typography>
			<Box my={2} display="flex" justifyContent="center">
				<Stepper className={classes.stepper} activeStep={activeStep}>
					{[0,1].map((label, index) => {
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
				<Typography variant="h6">{}</Typography>
			</Box>
			{activeStep == 0 &&
				<>
					<Box>
						<Typography className={classes.bold} variant="h6">Cuestionario para asociar CUIT:</Typography>
					</Box>
					<Box mt={1} display="flex" flexDirection="column">
						<Typography className={classes.label} variant="body1">CUIT</Typography>
						<TextField className={classes.textField} value={cuit} onChange={handleChange} size="medium"/>
					</Box>
				</>
			}
			{activeStep == 1 &&
			<>
				<Box my={5}>
					<Box display="flex">
						<Box mr={1}>
							<Typography className={classes.bold} variant="h6">CUIT al cual se quiere asociar:</Typography>
						</Box>
						<Typography variant="h6">{cuit}</Typography>
					</Box>
					<Box display="flex">
						<Box mr={1}>
							<Typography className={classes.bold} variant="h6">Razón Social:</Typography>
						</Box>
						<Typography variant="h6">{provider?.razon_social}</Typography>
					</Box>
					<Box display="flex">
						<Box mr={1}>
							<Typography className={classes.bold} variant="h6">Domicilio legal:</Typography>
						</Box>
						<Typography variant="h6">{provider?.domicilio}</Typography>
					</Box>
				</Box>
				<Typography className={classes.bold} variant="h6">Última documentación registrada:</Typography>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
						{columns.map((column) => (
							<TableCell
							className={classes.headerTable}
							key={column.id}
							align={column.align}
							style={{ minWidth: column.minWidth }}
							>
							{column.label}
							</TableCell>
						))}
						</TableRow>
					</TableHead>
					<TableBody id="documentTable">
						{documents.length > 0 &&
						documents.map((row, index) => {
							return (
							<TableRow
								hover
								role="checkbox"
								tabIndex={-1}
								key={index}
								className={classes.rowsTable}
							>
								{columns.map((column) => {
								for (let i = 0; i < documents.length; i++) {
									if (column.id === "fecha_documento") {
									return (
										<TableCell
										key={column.id}
										align={column.align}
										className={classes.cellTable}
										>
										{moment(row.fecha_documento).format('DD/MM/YYYY')}
										</TableCell>
									);
									} else if (column.id === "numero") {
									return (
										<TableCell
										key={column.id}
										align={column.align}
										className={classes.cellTable}
										>
										{row.numero_documento}
										</TableCell>
									);
									} else if (column.id === "nota_pedido") {
										return (
											<TableCell
											key={column.id}
											align={column.align}
											className={classes.cellTable}
											>
											{row.nota_pedido}
											</TableCell>
										);
									} else if (column.id === "estado") {
										return (
											<TableCell
											key={column.id}
											align={column.align}
											className={classes.cellTable}
											>
											{row.states[0]?.descripcion_abreviada || '-'}
											</TableCell>
										);
									} else if (column.id === "importe") {
										return (
											<TableCell
											key={column.id}
											align={column.align}
											className={classes.cellTable}
											>
											{row.monto}
											</TableCell>
										);
										}
								}
								})}
							</TableRow>
							);
						})}
					</TableBody>
					</Table>
				</TableContainer>
			</>
			}
			<Box mt={4} display='flex' justifyContent='center'>
				<Typography className={classes.bold} variant="h6">¿Confirmar la asociación de CUIT?</Typography>
			</Box>
			<Box text mt={8} display="flex" justifyContent="center">
				<Box mr={1}>
					<Button onClick={goToPreviousPage} size="large" color="primary" variant="outlined">Cancelar</Button>
				</Box>
				<Box ml={1}>
					<Button onClick={activeStep == 0 ? nextStep : goToPreviousPage} size="large" color="primary" variant="contained" disabled={cuit == ''}>{activeStep == 0 ? 'Continuar' : 'Confirmar'}</Button>
				</Box>
			</Box>
		</Box>
		:
		<Box></Box>
	);
};

export default AssociateCuit;




