import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useFormik } from "formik";
import client from "../clients/api";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    padding: theme.spacing(2, 4, 3),
  },
}));

const ResponseModal = ({ open, onClose, heading, description, success }) => {
  const classes = useStyles();
  return (
    <Modal className={classes.modal} open={open} disableBackdropClick>
      <div>
        <style jsx>{`
          .container {
            display: flex;
            padding: 0;
            justify-content: flex-end;
            margin-top: 20px;
          }
          .success {
            color: green;
          }
          .failure {
            color: red;
          }
        `}</style>
        <div className={classes.paper}>
          <div className={`h2 ${success ? "success" : "failure"}`}>
            {heading}
          </div>
          <div className="h5">{description}</div>
          <div className="container">
            <button className="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const NewExample = (props) => {
  const { skill, level } = props;
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState({
    open: false,
    heading: "",
    description: "",
    failure: false,
  });
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  const handleResponseOpen = (heading, description, success) => {
    setResponse({
      open: true,
      heading: heading,
      description: description,
      success: success,
    });
  };
  const handleResponseClose = () => {
    setResponse({
      open: false,
      heading: "",
      description: "",
      success: false,
    });
    handleClose();
  };

  const emailRegex = new RegExp(/^[a-z.]*@infinityworks.com$/);

  const formik = useFormik({
    initialValues: {
      skill: skill,
      level: level,
      example: "",
      advanced: false,
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.example) {
        errors.example = "An example is required!";
      } else if (values.example.length > 200) {
        errors.example = "Exceeded limit count of 200 characters!";
      }
      if (!values.email) {
        errors.email = "An email is required!";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Email must be an Infinity Works email!";
      }
      return errors;
    },
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      client
        .post("/examples", values)
        .then((response) => {
          if (response.status == 200) {
            handleResponseOpen(
              "Your example has been submitted!",
              "Someone from people ops will review and may be in contact for further information",
              true
            );
          } else {
            handleResponseOpen(
              "Your example has not been submitted!",
              "Unfortunately there was a problem submitting your example. Please try again later or if problem persists contact IT ops",
              false
            );
          }
        })
        .catch((error) => {
          handleResponseOpen(
            "Your example has not been submitted!",
            "Unfortunately there was a problem submitting your example. Please try again later or if problem persists contact IT ops",
            false
          );
        });
      setSubmitting(false);
    },
  });

  const body = (
    <div>
      <style jsx>{`
        .container {
          display: flex;
          padding: 0;
          justify-content: flex-end;
          margin-top: 20px;
        }
        .item {
          margin-left: 15px;
        }
        .spacer {
          padding-top: 20px;
        }
        .error {
          color: #ff0000;
        }
        input {
          margin-bottom: 0;
        }
        input[type="checkbox"] {
          cursor: pointer;
          width: 20px;
          height: 20px;
          border-radius: 5px;
          border: 2px solid #555;
          margin-bottom: 0;
        }
        input[type="checkbox"]:checked {
          background: #abd;
        }
        textarea {
          resize: none;
        }
        form {
          margin-bottom: 0;
        }
      `}</style>
      <div className={classes.paper}>
        <h2>{skill} example</h2>
        <form onSubmit={formik.handleSubmit} validate>
          <div className="h4">
            {"Level: "}
            {level}
          </div>
          <div className="h4">
            <label>
              {"Advanced: "}
              <input
                type="checkbox"
                name="advanced"
                value={formik.values.advanced}
                onChange={(e) => formik.handleChange(e)}
              ></input>
            </label>
          </div>
          <div>
            <label className="h4">
              {"Email: "}
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onBlur={() => {
                  formik.setFieldTouched("email", true, true);
                }}
                onChange={(e) => formik.handleChange(e)}
              />
            </label>
            {formik.errors.email && formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : (
              <div className="spacer"> </div>
            )}
          </div>
          <label className="h4">
            {"Example:"}
            <textarea
              name="example"
              value={formik.values.example}
              onBlur={() => {
                formik.setFieldTouched("example", true, true);
              }}
              onChange={(e) => formik.handleChange(e)}
              placeholder="My example..."
            />
          </label>
          {formik.errors.example && formik.touched.example ? (
            <div className="error">{formik.errors.example}</div>
          ) : (
            <div className="spacer"> </div>
          )}
          <div className="container">
            <button className="button" onClick={handleClose}>
              Cancel
            </button>
            <button
              className="button item"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <button className="button" type="button" onClick={handleOpen}>
        Suggest an example
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        disableBackdropClick
      >
        {body}
      </Modal>
      <ResponseModal
        open={response.open}
        heading={response.heading}
        description={response.description}
        success={response.success}
        onClose={() => handleResponseClose()}
      />
    </div>
  );
};

export default NewExample;
