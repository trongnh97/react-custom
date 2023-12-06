import { validateEmail } from "./ruleValidator";

interface FormType {
  name: string;
  email: string;
}
interface ErrorMessageType {
  name: { required: string };
  email: { required: string; format: string };
}

export const handleBlurInput =
  (
    form: FormType,
    errorMessages: ErrorMessageType,
    setForm: React.Dispatch<React.SetStateAction<FormType>>,
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessageType>>
  ) =>
  (e: React.FocusEvent<HTMLInputElement>) => {
    const nameInput = e.target.name as keyof FormType;
    if (!form[nameInput]) {
      setErrorMessages({
        ...errorMessages,
        [nameInput]: { required: "This field is required" },
      });
    }
  };

export const handleKeyupInput =
  (
    form: FormType,
    errorMessages: ErrorMessageType,
    setForm: React.Dispatch<React.SetStateAction<FormType>>,
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessageType>>
  ) =>
  (e: React.KeyboardEvent<HTMLInputElement>) => {
    const nameInput = (e.target as HTMLInputElement).name as keyof FormType;
    if (form[nameInput]) {
      setErrorMessages({
        ...errorMessages,
        [nameInput]: { required: "" },
      });
      if (nameInput === "email") {
        if (!validateEmail(form.email)) {
          setErrorMessages({
            ...errorMessages,
            email: { required: "", format: "format error" },
          });
        }
      }
    } else if (!form[nameInput]) {
      setErrorMessages({
        ...errorMessages,
        [nameInput]: { required: "This field is required" },
      });
    }
  };
