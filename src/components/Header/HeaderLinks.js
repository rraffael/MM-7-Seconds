import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://docs.google.com/forms/d/1Hl-jBv43TZj6s1bh48L-I2sckk-YMUSqwKriKi6d7AU/edit"
          color="primary"
          target="_blank"
          className={classes.navLink}
          > Formulary
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#project-section"
          color="transparent"
          className={classes.navLink}
        > Project Information
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#team-section"
          color="transparent"
          className={classes.navLink}
          > Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#marketing-section"
          color="transparent"
          className={classes.navLink}
          > Marketing Contents
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#downloads-section"
          color="transparent"
          className={classes.navLink}
          > Downloads
        </Button>
      </ListItem>
    </List>
  );
}
