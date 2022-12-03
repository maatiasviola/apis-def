import React,{useState} from 'react'

import Header from '../../components/Header';
import {Typography, Grid} from '@mui/material'
import { CssBaseline,Box,Container } from '@mui/material';
import {FaqList} from './FaqList'
import FaqAccordion from '../../components/FaqAccordion';

function Faq() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
    <>
    <CssBaseline />
    <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        }}
    >
        <Header/>
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
            }}
        >
            <Container maxWidth="xl" sx={{ mb: 3,mt:3 }}>        
                <Typography variant='h1' sx={{fontSize:'2rem',textAlign:'center'}}> Frequently Asked Questions </Typography>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center'
                        }}
                    >
                        <Grid container>
                            <Grid item xs={12} sm={4} sx={{
                                display:'flex',
                                justifyContent:'center',
                                flexDirection:'row',
                                alignItems:'center'
                            }}>
                            <img 
                                src='https://img.freepik.com/free-vector/website-faq-section-user-help-desk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character_335657-1602.jpg' alt='FAQ' 
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    height: 'auto'
                                }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Box sx={{display:'flex',flexDirection:'column'}}>
                                    {FaqList.map(faq=>
                                        <FaqAccordion 
                                            key={faq.id} 
                                            faq={faq} 
                                            handleChange={handleChange} 
                                            expanded={expanded}
                                        />
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
        </>
      );
}

export default Faq