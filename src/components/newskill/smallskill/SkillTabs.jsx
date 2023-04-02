import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListComponent from './ListComponent';
import { skills } from '../skills/skills'

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

export default function SkillTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ position: 'relative', zIndex: 1 }}>
            <AppBar position="static" color={"transparent"}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="inherit"
                    aria-label="full width tabs example"
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    sx={{
                        color: '#fff'
                    }}

                >
                    <Tab label="FrontEnd" {...a11yProps(0)} />
                    <Tab label="BackEnd" {...a11yProps(1)} />
                    <Tab label="Tools" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Typography variant={"h3"} component={"h3"} fontSize={"1.5em"} color={"#fff"} fontWeight={"bold"} sx={{ m: 0, p: 0 }}>
                    FrontEnd Skills
                </Typography>
                <ListComponent skills={skills.frontEnd} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Typography variant={"h3"} component={"h3"} fontSize={"1.5em"} color={"#fff"} fontWeight={"bold"} sx={{ m: 0, p: 0 }}>
                    BackEnd Skills
                </Typography>
                <ListComponent skills={skills.backEnd} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <Typography variant={"h3"} component={"h3"} fontSize={"1.5em"} color={"#fff"} fontWeight={"bold"} sx={{ m: 0, p: 0 }}>
                    Design Tools Skills
                </Typography>
                <ListComponent skills={skills.tools} />
            </TabPanel>
        </Box>
    );
}
