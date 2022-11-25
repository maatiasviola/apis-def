import React from 'react'
import {Typography} from '@mui/material'
import { Accordion} from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FaqAccordion({faq,handleChange,expanded}) {
    const {id,question,answer} = faq
    return (
        <Accordion expanded={expanded === id} onChange={handleChange(id)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography sx={{fontWeight: 'bold'}}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
  )
}

export default FaqAccordion