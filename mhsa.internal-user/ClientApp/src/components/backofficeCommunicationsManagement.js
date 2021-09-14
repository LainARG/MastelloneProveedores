import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import StylizedTabs from './stylizedTabs';
import BackofficeNoticesManagement from './backofficeNoticesManagement';
import BackofficeFilesManagement from './backofficeFilesManagement';

const BackofficeStatisticsManagement = () => {
  const useStyles = makeStyles(() => ({
  }));

  const classes = useStyles();

  const tabContent = [
    {
      label: 'Avisos.',
      content: <BackofficeNoticesManagement />
    },
    {
      label: 'Archivos.',
      content: <BackofficeFilesManagement/>
    },
  ]

  return (
    <Box>
      <StylizedTabs tabConfig={tabContent}/>
    </Box>
  );
};

export default BackofficeStatisticsManagement;
