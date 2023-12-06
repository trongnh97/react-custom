import InputText from "components/InputText";
import TextError from "components/TextError";
import { useCallback, useState } from "react";
import { handleBlurInput, handleKeyupInput } from "utils/formValidate";

interface FormType {
  name: string;
  email: string;
}
interface ErrorMessageType {
  name: { required: string };
  email: { required: string, format: string, }
}

function About() {
  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
  });
  const [errorMessages, setErrorMessages] = useState<ErrorMessageType>({
    name: {
      required: "",
    },
    email: {
      required: "",
      format: "",
    },
  });

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form]
  );
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  };
  handleBlurInput(form, errorMessages, setForm, setErrorMessages);
  handleKeyupInput(form, errorMessages, setForm, setErrorMessages);

  return (
    <div className="container">
      <h1>About</h1>
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <InputText
                name="name"
                value={form.name}
                onChange={handleChangeInput}
                onBlur={handleBlurInput(form, errorMessages, setForm, setErrorMessages)}
                onKeyup={handleKeyupInput(form, errorMessages, setForm, setErrorMessages)}
              />
              <TextError>{errorMessages.name.required}</TextError>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <InputText
                name="email"
                value={form.email}
                onChange={handleChangeInput}
                onBlur={handleBlurInput(form, errorMessages, setForm, setErrorMessages)}
                onKeyup={handleKeyupInput(form, errorMessages, setForm, setErrorMessages)}
              />
              <TextError>
                {errorMessages.email.required ? errorMessages.email.required : errorMessages.email.format}
              </TextError>
            </div>
            <div className="text-end">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
