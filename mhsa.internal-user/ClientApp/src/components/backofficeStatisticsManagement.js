import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import StylizedTabs from './stylizedTabs';
import BackofficeProviderStatistics from './backofficeProviderStatistics';
import BackofficeUserStatistics from './backofficeUserStatistics';
import BackofficeAccessStatistics from './backofficeAccessStatistics';
import BackofficeSectionStatistics from './backofficeSectionStatistics';

const BackofficeStatisticsManagement = () => {
  const useStyles = makeStyles(() => ({
  }));

  const classes = useStyles();

  const tabContent = [
    {
      label: 'Proveedores.',
      content: <BackofficeProviderStatistics />
    },
    {
      label: 'Secciones.',
      content: <BackofficeSectionStatistics/>
    },
    {
      label: 'Usuarios.',
      content: <BackofficeUserStatistics/>
    },
    {
      label: 'Accesos erróneos.',
      content: <BackofficeAccessStatistics/>
    },
  ]

  return (
    <Box>
      <StylizedTabs tabConfig={tabContent}/>
    </Box>
  );
};

export default BackofficeStatisticsManagement;
