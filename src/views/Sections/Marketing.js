import React from "react";
import ReactPlayer from "react-player";
import Carousel from "react-slick";
import { makeStyles, Typography, CardMedia, Card } from "@material-ui/core";
import styles from "assets/jss/material-kit-react/views/landingPageSections/marketingStyle.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import marketing1 from 'assets/img/marketing/cards.png';
import marketing2 from 'assets/img/marketing/logo.png';
import marketing3 from 'assets/img/marketing/poster.png';
import marketing4 from 'assets/img/marketing/sticker.png';
import marketing5 from 'assets/img/marketing/billboard.png';
import marketing6 from 'assets/img/marketing/simulated.png';
import marketing7 from 'assets/img/marketing/window.png';
import marketing8 from 'assets/img/marketing/on-going.png';


const useStyles = makeStyles(styles);
export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const marketingContent1 = [
    [marketing1, "Marketing-1"],
    [marketing2, "Marketing-2"],
    [marketing3, "Marketing-3"],
  ];

  const marketingContent2 = [
    [marketing4, "Marketing-4"],
    [marketing5, "Marketing-5"],
    [marketing6, "Marketing-6"],
    [marketing7, "Marketing-7"],
    [marketing8, "Marketing-8"],
  ];

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
                <ReactPlayer width="90%" url='https://www.youtube.com/watch?v=QwB-Ag8vDAk'/>
          </CardMedia>
        </GridItem>
      </GridContainer>
        <div className={classes.simpleMargin}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Typography gutterBottom component="h2" variant="h4" className={classes.description}>
                Images
              </Typography>
              <Card carousel>
                <Carousel {...settings}>
                  {marketingContent1.map(i => (
                    <div>
                      <img src={i[0]} alt={i[1]} className="slick-image" />
                    </div>
                  ))}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.simpleMargin}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {marketingContent2.map(i => (
                    <div>
                      <img src={i[0]} alt={i[1]} className="slick-image" />
                    </div>
                  ))}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    </div>
  );
}
