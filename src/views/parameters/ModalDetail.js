import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import parameter from "../parameters/Parameters.module.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

export default function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const classes = useStyles();
  const [values, setValues] = React.useState({});

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <div className={parameter.button}>
        <button onClick={handleShow} className={`material-icons ${parameter.iconTable} `}>
          <i>create</i>
        </button>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
        <div className={parameter['modal-content']}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm tham số</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={parameter.container}>
              <form action="" className={parameter.form}>
                <div>
                  <TextField
                    id="standard-name"
                    label="Tên tham số"
                    className={parameter.textField}
                    value={values.name}
                    onChange={handleChange("name")}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Kiểu dữ liệu"
                    className={parameter.textField}
                    value={values.currency}
                    onChange={handleChange("currency")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                  >
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  {/* <input type="text"></input> */}
                  <TextField
                    id="standard-name"
                    label="Ghi chú"
                    className={parameter.textField}
                    value={values.note}
                    onChange={handleChange("name")}
                    margin="normal"
                  />
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className={parameter.close}
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleClose}
            >
              Save
            </Button>
          </Modal.Footer>
          </div>
        </Modal>
      </div>
    </>
  );
}
