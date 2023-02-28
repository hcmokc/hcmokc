import * as React from 'react';

// Import Material UI Components
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Import Components
import IndividualTable from '../IndividualTable';

// Import CSS
import '../InfoTable/index.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: 800 }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label=" 4 Mar " {...a11yProps(0)} />
                    <Tab label=" 5 Mar " {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Female Category (Individual)</h3>
                    </div>
                    <IndividualTable />
                    <div className='category-container pt-5'>
                        <h3 className='title-category'>Male Category (Individual)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Female Category (Team)</h3>
                    </div>
                    <IndividualTable />
                    <div className='category-container pt-5 '>
                        <h3 className='title-category'>Female Category (Team)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}