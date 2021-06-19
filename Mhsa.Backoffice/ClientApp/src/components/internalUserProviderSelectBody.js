import React, { useState, useEffect, Suspense} from 'react';
import '../resources/styles/providerSelectBody.css';
import ProvidersContext from '../contexts/providersContext';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import pagination from '../pagination/pagination';

export default function InternalUserProviderSelectBody() {

    const [provider, setProvider] = useState("");
    const [allProviders, setAllProviders] = useState("");
    const [allData, setAllData] = useState("");
    const rowsPerPage = 10;


    const columns = [
        {
            id: 'Proveedor',
            label: 'Proveedor',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Razon_social',
            label: 'Razón social',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'cuit',
            label: 'CUIT',
            minWidth: 150,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        }
    ];


    useEffect(() => {

        if (allProviders == "") {

            ProvidersContext.fetchProviders().then((e) => {
                setAllProviders(e);
            });

        } else if (allData == "") {
            dataMapper(allProviders);
        }

    }, [allProviders, allData]);

    const dataMapper = (allproviders) => {
        console.log(allproviders);
        let alldata = [];

        for (let i = 0; i < allproviders.length; i++) {

            let objectData = {
                proveedor: null,
                razon_social: null,
                cuit: null

            }

            objectData.proveedor = allproviders[i].codigo_proveedor;
            objectData.razon_social = allproviders[i].razon_social;
            objectData.cuit = allproviders[i].cuit;
            alldata.push(objectData);
         }

        let pagData = pagination(alldata, alldata.length, rowsPerPage);
        setAllData(pagData);
       }


    function searchProviderSuggestionsHandler(e) {
        e.preventDefault();
        let suggestions = [];

    }
   

    

        return (

            <div className="providerSelectContainer">

                <h3 className="providerSelectLegend">Seleccionar proveedor.</h3>

                <div className="internalUserProviderSelectSearchBarContainer">

                    <input className="internalUserProviderSelectSearchBar" type="text" placeholder="Buscar proveedor" className="documentSearchBar1" onChange={searchProviderSuggestionsHandler} />
                    
                </div>

                <div className="internalUserProviderSelectSearchIconContainer">
                    <SearchRoundedIcon className="internalUserProviderSelectSearchIcon" fontSize="large" />
                </div>










            </div>
        );

    
    
}






