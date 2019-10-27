import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Container, Row, Col, Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInAction, persistedSignInAction } from '../../actions/authAction';
import { getPersisted } from '../../utils/persistState';

import "./login.scss";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const SignIn = ({ history, signInAction, auths, persistedSignInAction }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false
  });

  useEffect(() => {
    try {
      
      const auth = getPersisted('auth');
      if (auth) {
        persistedSignInAction(auth);
      }
    } catch (error) {
      
    }
  }, [auths]);

  const classes = useStyles();
  const [error, setError] = useState("");
  const [errorId, setErrorId] = useState("");

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const submit = e => {
    e.preventDefault();
    signInAction(state);
  };

  if (auths.isAuthenticated) return <Redirect to="/dashboard" />

  return (
    <Container>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          {/* <image id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="../../imagesshards-dashboards-logo.svg"> */}
          <img
            id="main-logo"
            className="d-inline-block align-top mr-1"
            style={{ maxWidth: "40px" }}
            src={require("../../images/shards-dashboards-logo.svg")}
            alt="Waza Dashboard"
          />
          <h1 style={{ color: "#1089FF" }}>Waza internal admin</h1>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <div className="login-form p-3 text-center">
          <h3 style={{ color: "#23374D" }}>Sign in</h3>
          <Form onSubmit={submit}>
            <Form.Group controlId="formID">
              <TextField
                onChange={onChange}
                name="email"
                label="Email"
                type="email"
                className="container-fluid"
                margin="normal"
              />
            </Form.Group>
            <Form.Text className="text-danger" id="errorId">
              {errorId && errorId}
            </Form.Text>
            <Form.Group controlId="formPassword">
              <FormControl className={clsx(classes.textField)}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  type={state.showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Form.Text className="text-danger" id="error">
                {error && error}
              </Form.Text>
            </Form.Group>
            <Form.Text className="mb-2 text-right" id="error">
              Don't have an account? 
              <Link className="ml-1" to="/sign-up">Sign up</Link>
            </Form.Text>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className="btn-login container-fluid"
            >
              Sign in
            </Button>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ auths }) => {
  return {
    auths,
  }
};

export default connect(mapStateToProps, { signInAction, persistedSignInAction })(SignIn);