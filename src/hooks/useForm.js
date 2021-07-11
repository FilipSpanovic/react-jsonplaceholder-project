import { useState, useCallback } from "react";

export const useForm = (initState) => {
  const [values, setValues] = useState(initState);

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  }, []);

  return { values, handleInputChange };
};
