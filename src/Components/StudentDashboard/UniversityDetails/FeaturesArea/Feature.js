import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

function Feature({ feature }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header">
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] bg-green-400 grid place-items-center rounded-full">
            <CheckRoundedIcon />
          </div>
          <span className="text-lg font-medium text-secondary">
            {feature?.title}
          </span>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {/* <div dangerouslySetInnerHTML={{ __html: feature?.description }}></div> */}
        <p>{feature?.description}</p>
      </AccordionDetails>
    </Accordion>
  );
}

export default Feature;
