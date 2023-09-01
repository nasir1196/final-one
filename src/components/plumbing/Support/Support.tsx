import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import supportImg from "@/../public/source/support/support.jpg";
import classes from "./support.module.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { fColumn, sColumn } from './data';



const Support = () =>
{
    const isMobileScreen = useMediaQuery( "(max-width: 940px)", { noSsr: true } );


    return (
        <Box sx={ { m: "4rem", height: "100vh" } } >
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } md={ 6 }>
                    <Box sx={ { display: { md: "none", xs: "block" } } }>
                        <Image src={ supportImg } style={ { height: "100%", width: '100%' } } alt="Support" />
                    </Box>
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <Box sx={ { width: { md: "100%", xs: "90%" }, p: "1rem" } }>
                        <Box>
                            <Typography>WHY CHOOSE US</Typography>
                            <Typography sx={ { fontWeight: "bolder", fontSize: { md: "2.5rem", xs: "1.5rem" } } }>Reasons why you should choose us </Typography>
                        </Box>
                        <Box>
                            <Grid container spacing={ 3 }>
                                <Grid item xs={ 12 } md={ 6 }>
                                    {
                                        fColumn.map( ( item, index ) => (
                                            <Box sx={ { my: { md: "2.7rem", xs: "0.4rem" }, display: { md: "flex", xs: "initial" }, alignItems: 'center', justifyContent: "center" } } key={ index }>
                                                {
                                                    isMobileScreen ? ( <Box sx={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
                                                        <item.icon sx={ { fontSize: '2.2rem', fontWeight: "bolder", m: "0.3rem" } } />
                                                    </Box> ) : ( <item.icon sx={ { fontSize: '2.2rem', fontWeight: "bolder", m: "0.3rem" } } /> )
                                                }
                                                <Typography sx={ { fontSize: '1.2rem', fontWeight: "bolder", textAlign: { xs: "center" } } }>{ item.title }</Typography>
                                            </Box>
                                        ) )
                                    }
                                </Grid>
                                <Grid item xs={ 12 } md={ 6 }>
                                    {
                                        sColumn.map( ( item, index ) => (
                                            <Box sx={ { my: { md: "2.7rem", xs: "0.4rem" }, display: { md: "flex", xs: "initial" }, alignItems: 'center', justifyContent: "center" } } key={ index }>
                                                {
                                                    isMobileScreen ? ( <Box sx={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
                                                        <item.icon sx={ { fontSize: '2.2rem', fontWeight: "bolder", m: "0.3rem" } } />
                                                    </Box> ) : ( <item.icon sx={ { fontSize: '2.2rem', fontWeight: "bolder", m: "0.3rem" } } /> )
                                                }
                                                <Typography sx={ { fontSize: '1.2rem', fontWeight: "bolder", textAlign: { xs: "center" } } }>{ item.title }</Typography>
                                            </Box>
                                        ) )
                                    }
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Support;