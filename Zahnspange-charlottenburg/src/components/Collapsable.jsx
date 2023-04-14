import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/components/Collapsable.scss";

function Collapsable() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="nawras-cv-wrapper">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={expanded === false ? "nawras-cv" : "nawras-cv expanded"}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="ex-icon" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="vita">Vita</Typography>
        </AccordionSummary>
        <AccordionDetails className="row">
          <li className="col">2003-2009 </li>
          <li className="col2">
            Studium und Approbation als Zahnarzt, Universität Mainz
          </li>
        </AccordionDetails>
        <AccordionDetails className="row">
          <li className="col">2010-2012</li>
          <li className="col2">
            Assistenzzahnarzt, Gemeinschaftspraxis Weise und Spak, Schlüchtern
          </li>
        </AccordionDetails>
        <AccordionDetails className="row">
          <li className="col">2012-2013</li>
          <li className="col2">
            Weiterbildungsassistent für Kieferorthopädie, Praxis Dr. F. Kirsch,
            Bergheim
          </li>
        </AccordionDetails>
        <AccordionDetails className="row">
          <li className="col">2013-2015 </li>
          <li className="col2">
            Weiterbildungsassistent für Kieferorthopädie, Universitätsklinikum
            Greifswald
          </li>
        </AccordionDetails>
        <AccordionDetails className="row">
          <li className="col">2015 </li>
          <li className="col2">
            Ernennung zum Fachzahnarzt für Kieferorthopädie
          </li>
        </AccordionDetails>
        <AccordionDetails className="row">
          <li className="col">2015-2018 </li>
          <li className="col2">
            Fachzahnarzt für Kieferorthopädie, Universitätsklinik Greifswald
          </li>
        </AccordionDetails>
        <AccordionDetails className="row">
          <li className="col">2018-2019 </li>
          <li className="col2">
            Promotion zum Dr. med. dent., Universität Greifswald
          </li>
        </AccordionDetails>
        <AccordionDetails className="row">
          <li className="col">2018-2020</li>
          <li className="col2">
            Fachzahnarzt für Kieferorthopädie, Praxis Dr. P. Löffler, Berlin
            Charlottenburg
          </li>
        </AccordionDetails>
        <AccordionDetails className="row">
          <li className="col">2020</li>
          <li className="col2">
            Niederlassung und Übernahme der kieferorthopädischen
            Fachzahnarztpraxis am Richard-Wagner-Platz, Berlin Charlottenburg
          </li>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Collapsable;
