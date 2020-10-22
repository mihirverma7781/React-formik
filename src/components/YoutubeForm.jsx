import React from "react";
import { Form, Formik,Field,ErrorMessage } from "formik";
const YoutubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comment:"",
    social: {
      facebook:'',
      twitter:''
    }
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
    if (!values.comment) {
      errors.comment = "Required";
    }
    if (!values.social.facebook) {
      errors.social.facebook = "Required";
    }
    if (!values.social.twitter) {
      errors.social.twitter = "Required";
    }

    return errors;
  };





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
       <text><ErrorMessage name="name"/></text> 
        </div>

        <div className='form-control'>
        <label htmlFor="email">E-Mail</label>
        <Field
          type="email"
          name="email"
          id="email"
     

        />
        <text><ErrorMessage name='email'/></text>
        </div>

        <div className='form-control'>
        <label htmlFor="channel">Channel</label>
        <Field
          type="text"
          name="channel"
          id="channel"
          />
        <text><ErrorMessage name="channel"/></text>
        </div>

        <div className='form-control'>
        <label htmlFor="Facebook">Facebook</label>
        <Field
          type="text"
          name="social.facebook"
          id="facebook"
          />
        <text><ErrorMessage name="social.facebook"/></text>
        </div>

        <div className='form-control'>
        <label htmlFor="Twitter">Twitter</label>
        <Field
          type="text"
          name="social.twitter"
          id="twitter"
          />
        <text><ErrorMessage name="social.twitter"/></text>
        </div>


        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field
          as="textarea"
          name="comment"
          id="comment"
          type="text"
          />
        <text><ErrorMessage name="comment"/></text>  
        </div>



        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
