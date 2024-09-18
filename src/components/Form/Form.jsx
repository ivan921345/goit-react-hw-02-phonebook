import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  ContactFormWrapper,
  NameErrorMessage,
  NumberErrorMessage,
} from './Form.styled';
const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});
function AddContactForm({ onSubmit }) {
  return (
    <Formik
      validationSchema={schema}
      initialValues={{ name: '', number: '' }}
      onSubmit={onSubmit}
    >
      <Form>
        <ContactFormWrapper>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component={NameErrorMessage} />
          </label>
          <label>
            Number
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component={NumberErrorMessage} />
          </label>
          <button type="submit">Add contact</button>
        </ContactFormWrapper>
      </Form>
    </Formik>
  );
}

export default AddContactForm;
