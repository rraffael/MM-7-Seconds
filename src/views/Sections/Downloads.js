import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import styles from "assets/jss/material-kit-react/views/landingPageSections/downloadStyle.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Report from "assets/files/Report.pdf";
import Pitch from "assets/files/Pitch.pdf";
import References from "assets/files/References.pdf";
import Benchmarking from "assets/files/Benchmarking.pdf";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="downloads-section">
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <Typography component="h1" variant="h2" className={classes.title}>
            Downloads
          </Typography>
        </GridItem>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={6} md={3}>
            <Button
              color="white"
              size="lg"
              href={Report}
              target="_blank"
            >
              <i className={classes.socials + " fas fa-download"} />
              <Typography className={classes.description}>
              Report
              </Typography>
              
            </Button>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Button
              color="white"
              size="lg"
              href={Pitch}
              target="_blank"
            >
              <i className={classes.socials + " fas fa-download"} />
              <Typography  className={classes.description}>
              Pitch
              </Typography>
              
            </Button>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Button
              color="white"
              size="lg"
              href={References}
              target="_blank"
            >
              <i className={classes.socials + " fas fa-download"} />
              <Typography  className={classes.description}>
               References 
              </Typography>
              
            </Button>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Button
              color="white"
              size="lg"
              href={Benchmarking}
              target="_blank"
            >
              <i className={classes.socials + " fas fa-download"} />
              <Typography  className={classes.description}>
                Benchmarking
              </Typography>
            </Button>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Button
              color="white"
              size="lg"
              href="https://drive.google.com/file/d/1VBKaVYz3U1uquHtQSjJaj7Gw83OhGKl-/view?usp=sharing"
              target="_blank"
            >
              <i className={classes.socials + " fas fa-download"} />
              <Typography  className={classes.description}>
                Project
              </Typography>
            </Button>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Button
              color="white"
              size="lg"
              href="https://drive.google.com/file/d/1xjecCi4pmg0W_cQYmFy2ItWAbawglc79/view?usp=sharing"
              target="_blank"
            >
              <i className={classes.socials + " fas fa-download"} />
              <Typography  className={classes.description}>
                Code
              </Typography>
            </Button>
          </GridItem>
        </GridContainer>
      </GridContainer>
    </div>
  );
}
