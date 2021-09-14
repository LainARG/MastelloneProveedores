import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';
import NavBarBackoffice from '../components/navBarBackoffice';
import BackofficeStatisticsManagement from '../components/backofficeStatisticsManagement';

class BackofficeStatisticsPage extends React.Component{


render(){

return(
<div>
    <NavBarBackoffice />
        <BackofficeStatisticsManagement />
    <Footer/>
</div>
);
}

}

export default BackofficeStatisticsPage;