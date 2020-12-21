import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/marketingStyle.js";
import { Typography, CardMedia } from "@material-ui/core";
import poster from 'assets/img/poster.png';
import logo from 'assets/img/logo.png';

const useStyles = makeStyles(styles);
export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="marketing-section">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Typography component="h1" variant="h2" className={classes.title}>
            Marketing contents
          </Typography>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Typography gutterBottom component="h2" variant="h4" className={classes.description}>
            Teaser
          </Typography>
          <CardMedia align="center">
                <ReactPlayer url='https://www.youtube.com/embed/8e1I94tIzgM'/>
          </CardMedia>
        </GridItem>
      </GridContainer>
      <div className={classes.section}>
       <GridContainer justify="center"> 
        <GridItem xs={12} sm={6} md={6}>
          <Typography gutterBottom component="h2" variant="h4" className={classes.description}>
            Poster
          </Typography>
          <img src={poster} width = "50%" height="auto" />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Typography gutterBottom component="h2" variant="h4" className={classes.description}>
            Logo
          </Typography>
          <img src={logo} width = "50%" height="auto" />
        </GridItem>
      </GridContainer>
      </div>
    </div>
  );
}
