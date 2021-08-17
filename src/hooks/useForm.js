import React, { useState } from "react";

const useForm = (init = {}) => {
  const [state, setState] = useState(init);
  const [submitState, setSubmitState] = useState("");
  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitState(state);
  };

  return { state, submitState, handleChange, handleSubmit };
};

export default useForm;
