import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Cesar from "../cesar.jpg";
import IBM from "../ibm.png";
import Lien from "../lien.png";
import Divider from "@material-ui/core/Divider";
import LinkedIn from "../LI-Logo.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: "auto",
    marginLeft: "auto",
  },
  img: {
    borderRadius: "50%",
    padding: 55,
  },
  logos: {
    width: "73px",
    height: "auto",
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  h2Centered: {
    textAlign: "center",
  },
  textBlue: {
    color: "#3776ab",
    textAlign: "center",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.img}
          alt="Contemplative Reptile"
          height="100%"
          image={Cesar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.h2Centered}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Cesar Gamboa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div className={classes.flexbox}>
              Software Engineer
              <img className={classes.logos} src={IBM}></img>
            </div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div className={classes.flexbox}>
              CoFounder{" "}
              <a style={{ padding: 5 }} href="https://lien.cr/">
                Lien
              </a>{" "}
              Costa Rica
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
          <div style={{ textAlign: "center" }}>cesargamboaavel@gmail.com</div>{" "}
          <br></br>
          <div className="linkedin-container">
            <a href="https://www.linkedin.com/in/cesar-gamboa-avellan-57690a14b/">
              {" "}
              <img className="linkedin-logo" src={LinkedIn}></img>
            </a>
          </div>
          <span className={classes.textBlue}>
            Javascript, Typescript, Python, React, Node JS, Graphql, SQL, NOSQL,
            AWS, HTML, CSS
          </span>
        </div>
      </CardActions>
    </Card>
  );
}
