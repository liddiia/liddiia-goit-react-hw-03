import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css"

const ContactForm = ({onAddContact}) => {

    const handleSubmit = (values, actions) => {
      onAddContact(values);
    actions.resetForm();
  };
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(7, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
  });
  return (
    <div > 

      <Formik 
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.contactForm}>
          <label className={css.formLabelTitle} htmlFor={nameFieldId}>Name</label>
          <Field className={css.formInput}
            type="text"
            name="name"
            placeholder="Name Sorname"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.formLabelTitle} htmlFor={numberFieldId}>Number</label>
          <Field className={css.formInput}
            type="text"
            name="number"
            placeholder="+380XXXXXXXXX"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css.addContactBtn} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
