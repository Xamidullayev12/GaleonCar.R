



//      Mui

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';








export default function SimpleAccordion() {
    return (
      <div>
        <Accordion className='bg-inherit' style={{background: "none"}}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon  className='text-white'/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='text-gray-400'>Бронирование</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{background: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  className='text-white'/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='text-gray-400'>ПРАВИЛА АРЕНДЫ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{background: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  className='text-white'/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='text-gray-400'>Обеспечительный платеж</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{background: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  className='text-white'/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='text-gray-400'>страхование</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{background: "none"}}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon  className='text-white'/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='text-gray-400'>доставка и возврат</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
       
      </div>
    );
  }
  