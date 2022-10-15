import { useState } from "react";

interface Validation {
  email: {
    regex: RegExp;
    message: string;
  };
  number: {
    regex: RegExp;
    message: string;
  };
}

const validation = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  number: { regex: /^\d+$/, message: "Utilize apenas números" },
};

const useForm = (type?: string | boolean) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<any>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) validate(e.target.value);
    setValue(e.target.value);
  };

  const validate = (value: any) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (
      validation[type as keyof Validation] &&
      !validation[type as keyof Validation].regex.test(value)
    ) {
      setError(validation[type as keyof Validation].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
