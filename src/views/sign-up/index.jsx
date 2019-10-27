import React, { useState } from "react";
import clsx from "clsx";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupAction } from '../../actions/authAction';
import "./sign-up.scss";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const SignUp = ({ history, signupAction, auths }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    secret: "",
    showPassword: false
  });

  const classes = useStyles();
  const [error, setError] = useState("");
  const [errorId, setErrorId] = useState("");

  const { isSigningUp, signupState } = auths;

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

    signupAction(state);

  };

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
          <h3 style={{ color: "#23374D" }}>Sign Up</h3>
          <Form onSubmit={submit}>
            <Form.Group controlId="email">
              <TextField
                onChange={onChange}
                name="email"
                id="email"
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

            <Form.Group controlId="formConfirmPassword">
              <FormControl className={clsx(classes.textField)}>
                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={state.showPassword ? "text" : "password"}
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
            <Form.Group controlId="formKey">
              <TextField
                onChange={onChange}
                name="key"
                label="Secret Key"
                type="text"
                className="container-fluid"
                margin="normal"
              />
            </Form.Group>

            <Form.Text className="text-danger" id="errorId">
              {errorId && errorId}
            </Form.Text>
            <Form.Text className="mb-2 text-right" id="error">
              Already have an account?
              <Link className="ml-1" to="/sign-in">
                Sign in
              </Link>
            </Form.Text>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className="btn-login container-fluid"
            >
              Sign up
            </Button>
          </Form>
          {isSigningUp && <div id="load-wrapper" style={{ margin: '10px auto' }}>
            <Spinner animation="border" variant="primary"></Spinner>
          </div>}
          {(signupState === true) && <h4 className="text-success">Success!</h4>}

          {(signupState === false) && <h4 className="text-danger">Failed, pls try again!</h4>}
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

export default connect(mapStateToProps, { signupAction })(SignUp);