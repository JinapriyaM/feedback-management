import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "../../components/Card/Card";
// import Axios from '../../util/axios';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    display: "flex",
    // backgroundColor: "#606060",
    flexWrap: "wrap",
    "& > *": {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [propertyData, setPropertyData] = useState([
    {
      name: "test",
      price: 1500,
      rating: 2
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/property/")
      .then((response) => {
        console.log(response.data.data);
        setPropertyData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={classes.root}>
      <Grid container justify="flex-start">
        <Grid item container spacing={3} justify="space-evenly">
          {propertyData.map((property) => {
            console.log(property.rating);
            return (
              <Grid item xs={3}>
                <Card data={property} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
