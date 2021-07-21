import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import StylizedTabs from './stylizedTabs';
import BackofficeProviderUserList from './backofficeProviderUserList';
import BackofficeProviderUserPendingList from './backofficeProviderUserPendingList';
import BackofficeInternalUserList from './backofficeInternalUserList';

const BackofficeUserManagement = () => {
  const useStyles = makeStyles(() => ({
  }));

  const classes = useStyles();

  const tabContent = [
    {
      label: 'Usuarios Proveedores.',
      content: <BackofficeProviderUserList />
    },
    {
      label: 'Proveedores Pendientes.',
      content: <BackofficeProviderUserPendingList/>
    },
    {
      label: 'Usuarios Internos.',
      content: <BackofficeInternalUserList />
    },
  ]

  return (
    <Box>
      <StylizedTabs tabConfig={tabContent}/>
    </Box>
  );
};

export default BackofficeUserManagement;
