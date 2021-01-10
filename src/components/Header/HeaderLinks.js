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
          href="#project-section"
          className={classes.navLink}
        > Project Information
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#team-section"
          className={classes.navLink}
          > Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#marketing-section"
          className={classes.navLink}
          > Marketing Contents
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#downloads-section"
          className={classes.navLink}
          > Downloads
        </Button>
      </ListItem>
    </List>
  );
}
