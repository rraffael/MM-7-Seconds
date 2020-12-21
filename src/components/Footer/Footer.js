import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <Container disableGutters>
        <Grid>
          <Grid item>
            <a
                href="https://github.com/rraffael/MM-7-Seconds"
                className={classes.block}
              >
                <Typography className={classes.description}>
                  Github { }
                  <i className={classes.socials + " fab fa-github"} />
                </Typography>
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
