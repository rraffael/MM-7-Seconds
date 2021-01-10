import React from "react";
import ReactPlayer from "react-player";
import Carousel from "react-slick";
import { makeStyles, Typography, CardMedia } from "@material-ui/core";
import styles from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.js";

import WhyIcon from "@material-ui/icons/Chat";
import WhoIcon from '@material-ui/icons/AccessibilityNew';
import HowIcon from '@material-ui/icons/AccountTree';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";

import UserExperience from "assets/img/UserExperience.png";
import makingof1 from "assets/img/making-of/metters.jpg";
import makingof2 from "assets/img/making-of/side-view.jpg";
import makingof3 from "assets/img/making-of/top-view.jpg";

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

  const makingOf = [
    [makingof1, "Making-of-1"],
    [makingof2, "Making-of-2"],
    [makingof3, "Making-of-3"],
  ];
  return (
    <div className={classes.section} id="project-section">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Typography component="h1" variant="h2" className={classes.title}>
              Project Information
          </Typography>
          <div align="justify" >
            <Typography component="h2" variant="h6"  paragraph="true" className={classes.description}>
              “7 SECONDS” is an interactive installation where two users interact with each other by answering questions or guessing 
                the answer of their opponent, comparing both the truth and the judgment.
            </Typography>
            <Typography component="h2" variant="h6" paragraph="true" className={classes.description}>
              The Main structure of the experience is based on 3 rounds. The first round users will judge each other based on a first 
                impression. All the questions will be based on C. Jung and I. Briggs Myers Type Theory. Questions will be anonymous.
            </Typography>
            <Typography component="h2" variant="h6" paragraph="true" className={classes.description}>
              At the second round users will have to answer about themselves and guess the answer of the other. This time answers will 
                be shown and users will have to reflect on them and see if their first assumption was correct. The questions on this 
                phase will be in some way related to the first round, but will be more unconventional and may cause some discomfort.
            </Typography>
            <Typography component="h2" variant="h6" paragraph="true" className={classes.description}>
              And in the final round users will have to answer the same questions of the first round. In this round they will probably 
                change their answers about one another. If they changed, it shows how bad their judgments can be, if not, they might 
                be good at judging people.
            </Typography>
            <Typography component="h2" variant="h6" paragraph="true" className={classes.description}>
              The experience will then conclude giving users an important message about human judgment (Conclusion), and entice them 
                to discuss with each other (Discussion), making them understand how we should never use our first impressions to 
                judge others.
            </Typography>
            <Typography component="h2" variant="h6" paragraph="true" className={classes.description}>
              This was a project developed for the master’s on Multimedia and on Electrical and Computer Engineering and its main focus 
                is to confront users with their judgments and reality.
            </Typography>
          </div>
        </GridItem>
      </GridContainer>
      <div className={classes.section}> 
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Why?"
              description="The goal of the overall experience is to create a discussion between users in order to make them understand that, 
                even though judgement is impossible to avoid, we need to try to put it aside and meet people before making bad assumptions."
              icon={WhyIcon}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Who?"
              description="Users are supposed to confront their judgments and reality. Users can be anyone who does not have a full grasp over their judgemental behaviour. 
                For people who don't know each other with strong ideas and beliefs, between 20-60 years old."
              icon={WhoIcon}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="How?"
              description="The experience begins with two users entering a somewhat private space with two chairs side by side in each corner of a table, a computer and  
              two evaluating devices. Then the computer will guide the users with explanations and instructions, followed by the 3 rounds descripted above."
              icon={HowIcon}
              vertical
            />
          </GridItem>
        </GridContainer>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Typography component="h2" variant="h4" className={classes.description}>
                User Experience
              </Typography>
              <img src={UserExperience} width = "100%" height="auto"/>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Typography component="h2" variant="h4" className={classes.description}>
                Making-of
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings} className={classes.carousel}>
                  {makingOf.map(i => (
                    <div>
                      <img src={i[0]} alt={i[1]} className="slick-image" />
                    </div>
                  ))}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <CardMedia>
                <ReactPlayer width="90%" url='https://youtu.be/BxkeLS52WYU'/>
              </CardMedia>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CardMedia>
                <ReactPlayer width="90%" url='https://youtu.be/ELx2TPJrE1M'/>
              </CardMedia>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CardMedia>
                <ReactPlayer width="90%" url='https://youtu.be/fSJtSSmM0as'/>
              </CardMedia>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
