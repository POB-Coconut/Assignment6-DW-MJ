import { useState } from 'react';

const useForm = (callback) => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  const clearFormVals = () => {
    setState({});
  };

  return { state, handleChange, handleSubmit, clearFormVals };
};

export default useForm;
