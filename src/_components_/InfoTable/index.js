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
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label=" Junior (Individual) " {...a11yProps(0)} />
                    <Tab label=" Female (Individual) (0-1) " {...a11yProps(1)} wrapped />
                    <Tab label=" Female (Individual) (2-3) " {...a11yProps(2)} wrapped />
                    <Tab label=" Male (Individual) (0-1) " {...a11yProps(3)} />
                    <Tab label=" Male (Individual) (2-3) " {...a11yProps(4)} />
                    <Tab label=" Female (Team) " {...a11yProps(5)} />
                    <Tab label=" Male (Team) " {...a11yProps(6)} />
                    <Tab label=" Open (Team) " {...a11yProps(7)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Junior (Individual)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Female (Individual) (0-1 Dan)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>

                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Female (Individual) (2-3 Dan)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>

                <TabPanel value={value} index={3} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Male (Individual) (0-1 Dan)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>

                <TabPanel value={value} index={4} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Male (Individual) (2-3 Dan)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>

                <TabPanel value={value} index={5} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Male (Team)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>

                <TabPanel value={value} index={6} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Open (Team)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>

                <TabPanel value={value} index={7} dir={theme.direction}>
                    <div className='category-container'>
                        <h3 className='title-category'>Female (Team)</h3>
                    </div>
                    <IndividualTable />
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}