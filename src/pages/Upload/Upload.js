import React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
}));

const Upload = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Upload your file.
        </Typography>
        {/* <form className={classes.form} noValidate> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Converted file name"
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="btn-upload">
                <input
                  id="btn-upload"
                  name="btn-upload"
                  style={{ display: "none" }}
                  type="file"
                  accept=".audio"
                />
                <Button
                  className="btn-choose"
                  variant="outlined"
                  component="span"
                  fullWidth
                >
                  Select Audio File
                </Button>
              </label>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Upload
          </Button>
        {/* </form> */}
      </div>
    </Container>
  );
};

export default Upload;
