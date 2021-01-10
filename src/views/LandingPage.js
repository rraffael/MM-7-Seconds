import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

import Marketing from "./Sections/Marketing.js";
import Team from "./Sections/Team.js";
import Downloads from "./Sections/Downloads.js";
import Project from "./Sections/Project.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="7 Seconds"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/background.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Project />
          <Team />
          <Marketing   />
          <Downloads />
        </div>
      </div>
      <Footer />
    </div>
  );
}
