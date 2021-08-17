import React, { useState } from 'react';

const useForm = (init = {}) => {
  const [state, setState] = useState(init);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
    setIsSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return { isSubmitting, state, handleChange, handleSubmit };
};

export default useForm;
