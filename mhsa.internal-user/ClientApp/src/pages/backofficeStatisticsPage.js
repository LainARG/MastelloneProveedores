import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NavBarInternalUser from '../components/navBarInternalUser';
import BackofficeStatisticsManagement from '../components/backofficeStatisticsManagement';

class BackofficeStatisticsPage extends React.Component{


render(){

return(
<div>
    <NavBarInternalUser />
        <BackofficeStatisticsManagement />
    <Footer/>
</div>
);
}

}

export default BackofficeStatisticsPage;