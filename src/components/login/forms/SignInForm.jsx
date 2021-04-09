import React, { useRef } from "react";
// import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import { Button, LinearProgress, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field } from "formik";
import { motion } from "framer-motion";

//CSS
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(4, 0, 3),
  },
  primary:{ 
    backgroundColor: "#4543FF",
  }
}));

const SignInForm = () => {
  const classes = useStyles();
  const firstName = useRef();
  const lastName = useRef();

  /* SUBMIT */
  function handleSubmit(event) {
    event.preventDefault();

    const signInFirstName = firstName.current.value;
    const signInLastName = lastName.current.value;

    //veri çekme
    localStorage.setItem('name',signInFirstName)
    localStorage.setItem('surname',signInLastName)
    
    window.location.replace(`/home`);
  }
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          rememberMe: true,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <Field
                  component={TextField}
                  inputRef={firstName}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputProps={{
                    maxLength: 12,
                    minLength: 3,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  inputRef={lastName}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  inputProps={{
                    maxLength: 12,
                    minLength: 3,
                  }}
                />
              </Grid>
              
            </Grid>
            {isSubmitting && <LinearProgress />}
            <br />
            <motion.div
              className="animatable"
              whileHover={{
                scale: 1.0,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                // startIcon={<LockOpenRoundedIcon />}
                className={classes.submit}
                onClick={submitForm}
              >
                Sign In
              </Button>
            </motion.div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignInForm;
