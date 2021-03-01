import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Comment from "../../components/Comment/Comment";
import Details from "../../components/Details/Details";
import Rating from "@material-ui/lab/Rating";
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
  media: {
    height: 500,
  },
}));

const PropertyDetails = () => {
  const classes = useStyles();
  const location = useLocation();
  const [data, setData] = useState({
    name: "The room house",
    details: { rooms: 4, parking: true },
    comments: [
      {
        user: "testPerson",
        rate: 2,
        text: "this is sample",
        replies: [
          { user: "replyUser", text: "one" },
          { user: "replyUser2", text: "two" },
        ],
      },
      {
        user: "testPerson2",
        rate: 5,
        text: "this is sample2",
        replies: [
          { user: "replyUser", text: "one" },
          { user: "replyUser2", text: "two" },
        ],
      },
    ],
  });

  const [guestId, setGuestId] = useState("");
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [tpNo, setTpNo] = useState("");
  const [pRating, setPRating] = useState(3);
  const [oRating, setORating] = useState(3);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    setData(location.state);
  }, []);

  console.log(location);

  const submitHandler = () => {
    axios
      .post("http://localhost:8080/comment/", {
        pId: data._id,
        gId: guestId,
        gname: guestName,
        email: email,
        tp: tpNo,
        pRating: pRating,
        oRating: oRating,
        text: commentText,
      })
      .then((response) => {
        console.log(response);
        setGuestId("");
        setGuestName("");
        setEmail("");
        setTpNo("");
        setPRating(3);
        setORating(3);
        setCommentText("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Paper elevation={0} />
      <Grid container spacing={0} justify="flex-start">
        <Grid item xs={12}>
          <Card>
            {/* <CardActionArea> */}
            <CardMedia
              className={classes.media}
              image="https://www.berjayahotel.com/sites/default/files/hotel-category-offers/kualalumpur/offers-room-berjaya-times-square-hotel-kuala-lumpur.jpg"
              title="Contemplative Reptile"
            />
            {/* </CardActionArea> */}
          </Card>
        </Grid>
        <Details pRate={data.pRatings} oRate={data.oRatings} />
        <div style={{ padding: 14 }} className="App">
          <h1>Comments</h1>
          <Paper style={{ padding: "40px 20px", width: "1360px" }}>
            {data.comments.map((comment) => (
              <Comment
                user={comment.gName}
                rate={comment.pRating}
                replies={comment.replies}
                text={comment.text}
              />
            ))}
            <Grid container spacing={2} justify="center">
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  size="small"
                  id="gid"
                  label="Guest ID"
                  name="gid"
                  onChange={(e) => setGuestId(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  size="small"
                  id="gname"
                  label="Guest Name"
                  name="gname"
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  size="small"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  size="small"
                  id="tp"
                  label="Telephone Number"
                  name="tp"
                  onChange={(e) => setTpNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={3}>
                  <Typography>Property Rating:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Rating
                    name="owner"
                    size="large"
                    value={oRating}
                    onChange={(event, newValue) => {
                      console.log(newValue);   
                      setORating(newValue);
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography>Owner Rating:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Rating
                    name="owner"
                    size="large"
                    value={pRating}
                    onChange={(event, newValue) => {
                      setPRating(newValue);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                  id="comment"
                  label="Comments..."
                  name="comment"
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => submitHandler()}
            >
              Submit
            </Button>
          </Paper>
        </div>
        {/* <Grid>
          <Typography>Details: </Typography>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default PropertyDetails;
