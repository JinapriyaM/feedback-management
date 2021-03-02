import React from "react";

import { Grid, Paper, } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const Details = (props) => {
  return (
    <div style={{ padding: 14 }} className="App">
      <h1>Details</h1>
      <Paper style={{ padding: "25px 20px", width: "1360px" }}>
        <Grid container wrap="nowrap" spacing={2} direction="column">
          {/* <Grid item container wrap="nowrap" spacing={2}> */}
          <Grid item xs={12}>
            <ul>
              <li>3 bed rooms</li>
              <li>fdsfdfsd</li>
              <li>fdsfdfdfdsfd</li>
            </ul>
          </Grid>
          <Grid item container>
            <Grid item xs={6}>
              <ul style={{ "list-style-type": "none" }}>
                <li>Property Ratings</li>
                <li>
                  <Rating name="owner" size="medium" value={5} />{" "}
                  {props.pRate.five}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={4} />{" "}
                  {props.pRate.four}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={3} />{" "}
                  {props.pRate.three}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={2} />{" "}
                  {props.pRate.two}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={1} />{" "}
                  {props.pRate.one}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={0} />{" "}
                  {props.pRate.zero}
                </li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <ul style={{ "list-style-type": "none" }}>
                <li>Owner Ratings</li>
                <li>
                  <Rating name="owner" size="medium" value={5} />{" "}
                  {props.oRate.five}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={4} />{" "}
                  {props.oRate.four}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={3} />{" "}
                  {props.oRate.three}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={2} />{" "}
                  {props.oRate.two}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={1} />{" "}
                  {props.oRate.one}
                </li>
                <li>
                  <Rating name="owner" size="medium" value={0} />{" "}
                  {props.oRate.zero}
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Details;
