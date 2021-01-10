import React from "react";
import classNames from "classnames";
import { makeStyles, Typography, Button } from "@material-ui/core/";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader";
import CardFooter from "components/Card/CardFooter";

import raffael from 'assets/img/faces/raffael.png';
import ines from 'assets/img/faces/ines.jpg';
import rui from 'assets/img/faces/rui.jpg';
import tiago from 'assets/img/faces/tiago.jpg';
import hugo from 'assets/img/faces/hugo.jpg';
import noemia from 'assets/img/faces/noemia.png';
import BehanceIcon from 'assets/img/behance-icon.png';
import SketchfabIcon from 'assets/img/sketchfab-icon.png';

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section} id="team-section">
      <Typography component="h1" variant="h2" className={classes.title}>
        Team
      </Typography>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Typography component="h2" variant="h6" className={classes.descriptionMain}>
              We are the team of students of the University of Porto that created this project 
              in Laboratory Multimedia discipline on Multimedia Master degree. 
              Follow a little about us, so don't hesitate to contact us if it's of your interest!
            </Typography>
        </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={hugo} alt="..." className={imageClasses} />
              </GridItem>
              <Typography component="h4" variant="h5" className={classes.title}>
                Hugo Carvalho
              </Typography>
              <CardHeader>
                <Typography component="h4" variant="h7" className={classes.description}>
                  Master in Multimedia  Interactive Technologies and Digital Games
                </Typography>
                <strong className={classes.smallTitle}>up202003354@fe.up.pt</strong>
              </CardHeader>
              <CardBody>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ines} alt="..." className={imageClasses} />
              </GridItem>
              <Typography component="h4" variant="h5" className={classes.title}>
                Inês Ferraz
              </Typography>
              <CardHeader>
                <Typography component="h4" variant="h7" className={classes.description}>
                  Master in Multimedia  Interactive Technologies and Digital Games
                </Typography>
                <strong className={classes.smallTitle}>up201503483@fba.up.pt</strong>
              </CardHeader>
              <CardBody>
                Comunication Designer with a taste for games.
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://www.instagram.com/saparucat/?hl=en"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://www.behance.net/inesmachadece0"
                >
                  <img src={BehanceIcon} width = "48px" height="40.8px"/>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={noemia} alt="..." className={imageClasses} />
              </GridItem>
              <Typography component="h4" variant="h5" className={classes.title}>
                Noémia Ferreira
              </Typography>
              <CardHeader>
                <Typography component="h4" variant="h7" className={classes.description}>
                  Master in Electrical and Computer Engineering
                </Typography>
                <strong className={classes.smallTitle}>up201505003@fe.up.pt</strong>
              </CardHeader>
              <CardBody>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={raffael} alt="..." className={imageClasses} />
              </GridItem>
              <Typography component="h4" variant="h5" className={classes.title}>
                Raffael Rodrigues
              </Typography>
              <CardHeader>
                <Typography component="h4" variant="h7" className={classes.description}>
                  Master in Multimedia  Interactive Technologies and Digital Games
                </Typography>
                <strong className={classes.smallTitle}>raffaelcr.ti@gmail.com</strong>
              </CardHeader>
              <CardBody>
                I like programming, manage technology groups, watch movies, series, animes and others animations, love to listen music 
                and more than everything play (almost) any kind of games.
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="http://github.com/rraffael/"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={rui} alt="..." className={imageClasses} />
              </GridItem>
              <Typography component="h4" variant="h5" className={classes.title}>
                Rui Barbosa
              </Typography>
              <CardHeader>
                <Typography component="h4" variant="h7" className={classes.description}>
                  Master in Electrical and Computer Engineering
                </Typography>
                <strong className={classes.smallTitle}>up201605740@fe.up.pt</strong>
              </CardHeader>
              <CardBody>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={tiago} alt="..." className={imageClasses} />
              </GridItem>
              <Typography component="h4" variant="h5" className={classes.title}>
                Tiago Rossini
              </Typography>
              <CardHeader>
                <Typography component="h4" variant="h7" className={classes.description}>
                  Master in Multimedia  Interactive Technologies and Digital Games
                </Typography>
                <strong className={classes.smallTitle}>up201909606@fba.up.pt</strong>
              </CardHeader>
              <CardBody>
                Multimedia Artist.
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://sketchfab.com/TiagoRoss"
                >
                  <img src={SketchfabIcon} width = "48px" height="40.8px"/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://mitotopia.carrd.co/"
                >
                  <i className={classes.socials + " fas fa-globe"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://www.instagram.com/mito_3d/?hl=en"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://www.youtube.com/channel/UCw0NX9DsJXB4d85bkEVLm8A"
                >
                  <i className={classes.socials + " fab fa-youtube"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
