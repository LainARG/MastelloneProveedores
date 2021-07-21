import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const StylizedTabs = (props) => {
  const {tabConfig} = props;

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const useStyles = makeStyles(() => ({
    tabs: {
      '& .MuiTab-wrapper': {
        justifyContent: 'left',
        flexDirection: 'row',
      },
      '& .MuiTab-root.Mui-selected': {
        backgroundColor: '#fff',
      }
    },
    tabPanel: {
    }
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box marginTop={4} display="flex" justifyContent="center">
      <Box width="90%">
        <AppBar elevation={0} color="transparent" position="static">
          <Tabs className={classes.tabs} variant="fullWidth" indicatorColor="primary" value={value} onChange={handleChange} aria-label="simple tabs example">
            {tabConfig.map(el =>
                <Tab label={el.label}/>
              )
            }
          </Tabs>
        </AppBar>
        {tabConfig.map((el, index) =>
            <TabPanel className={classes.tabPanel} value={value} index={index}>
              {el.content}
            </TabPanel>
          )
        }
      </Box>
    </Box>
  );
};

export default StylizedTabs;
