import React from "react";
import { Button, Modal } from "react-bootstrap";
import parameter from "../parameters/Parameters.module.scss";
import TextField from "@material-ui/core/TextField";
import { connect } from 'react-redux';
import { addParam } from '../../actions/paramsAction';

function Example({ isShowing, hide, addParam}) {
  // const [show, setShow] = useState(false); // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const classes = useStyles();
  const [values, setValues] = React.useState({});

  const handleChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value});

  };
  const submit = (e) =>{
    e.preventDefault()
    addParam(values);
    // try {
    //   await axios({
    //     url: '/api/params/',
    //     method: 'POST',
    //     data: values,
    //   })
    // } catch (error) {
    //   console.log(error.message)
    // }
  }

  return (
    <>
      <div >
      
        <Modal  show={isShowing} onHide={hide}>
        <form onSubmit={submit} className={parameter.form}>
          <div className={parameter['modal-content']}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm tham số</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={parameter.container}>
              {/* <form action="" className={parameter.form}> */}
                <div>
                  <TextField
                    id="standard-name"
                    label="Tên tham số"
                    className={parameter.textField}
                    
                    name="name"
                    onChange={handleChange}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="type-name"
                    label="Kiểu dữ liệu"
                    className={parameter.textField}
                    
                    name="type"
                    onChange={handleChange}
                    margin="normal"
                  />
                </div>
                <div>
                  {/* <TextField
                    id="standard-select-currency"
                    select
                    label="Kiểu dữ liệu"
                    className={parameter.textField}
                    value={values.currency}
                    onChange={handleChange}
                    name="currency"
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
                  </TextField> */}
                </div>
                <div>
                  {/* <input type="text"></input> */}
                  <TextField
                    id="standard-name"
                    label="Ghi chú"
                    className={parameter.textField}
                    
                    name="description"
                    onChange={handleChange}
                    margin="normal"
                  />
                </div>
              
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className={parameter.close}
              variant="secondary"
              onClick={hide}
            >
              Close
            </Button>
            <Button
            type="submit"
              // className={"text-danger `${parameter.save}`"}
              variant="primary"
              onClick={hide}
            >
              Save
            </Button>
          </Modal.Footer>
          </div>
          </form>
        </Modal>
        
      </div>
    </>
  );
}

export default connect(null, { addParam })(Example);