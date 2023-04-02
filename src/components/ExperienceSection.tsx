import { Card, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Backtxt from './newskill/Backtxt';
import DisplayCurrent from './newskill/DisplayCurrent';
import arrowangle from '../assets/svg/arrowangle.svg';
import Buttons from './newskill/Buttons';
import Frontend from './newskill/skills/Frontend';
import BackEnd from './newskill/skills/Backend';
import Tools from './newskill/skills/Tools';
import FromRight from './animationComponent/FromRight';


const NewSkill = () => {
    const [skill, setskill] = useState(0);
    const skills = ['FrontEnd', 'BackEnd', 'Tools']

    return (
        <Box
            sx={{
                bgcolor: '#0A1929',
                py: 10
            }}
        >
            <Container
                maxWidth={"xl"}
            >
                <FromRight y={0}>
                    <Card elevation={0} sx={{
                        position: 'relative',
                        pl: 3,
                        bgcolor: "transparent"
                    }}>
                        <Backtxt />
                        <Grid container spacing={10} sx={{ pl: 0, zIndex: 1, position: 'relative' }}>
                            <Grid item xs={2} sx={{ mt: 0 }}>
                                <DisplayCurrent skill={skills[skill]} />
                                <Box
                                    component={"img"}
                                    alt=""
                                    src={arrowangle}
                                    sx={{
                                        ml: { xl: 20, lg: 16, md: 10 },
                                        mt: 2,
                                        maxWidth: { xl: 120, lg: 70, md: 50 }
                                    }}
                                ></Box>
                            </Grid>
                            <Grid item xs={9.2} sx={{ mt: { xl: 25, lg: 18 } }}>
                                <Box sx={{
                                    position: 'relative',
                                }}>
                                    {
                                        skill === 0 ?
                                            <Frontend />
                                            :
                                            skill === 1
                                                ?
                                                <BackEnd />
                                                :
                                                <Tools />
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={11}>
                                <Buttons skill={skill} setskill={setskill} skills={skills} />
                            </Grid>
                        </Grid>
                    </Card>
                </FromRight>
            </Container>
        </Box>
    )
};

export default NewSkill;
