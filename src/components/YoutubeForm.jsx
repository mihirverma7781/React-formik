import React from "react";
import { Form, Formik,Field } from "formik";
const YoutubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "invalid email format!";
    }
    if (!values.channel) {
      errors.channel = "Required";
    }

    return errors;
  };



  console.log('touched value',formik.touched);

  return (
    <Formik 
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}>
      <Form>
          <div className='form-control'>
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          name="name"
          id="name"
       
        />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>

        <div className='form-control'>
        <label htmlFor="email">E-Mail</label>
        <Field
          type="email"
          name="email"
          id="email"
     

        />
        { formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>

        <div className='form-control'>
        <label htmlFor="channel">Channel</label>
        <Field
          type="text"
          name="channel"
          id="channel"
          

        />
        { formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
