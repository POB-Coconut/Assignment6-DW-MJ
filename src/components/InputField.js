import React from 'react';

const InputField = ({ props }) => {
  const { state, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name='textInput'
        rows='5'
        value={state.textInput}
        onChange={handleChange}
      ></textarea>
      <button>go</button>
      <button>reset</button>
    </form>
  );
};

export default InputField;
