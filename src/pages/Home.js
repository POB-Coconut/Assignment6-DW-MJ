import React, { useState, useEffect } from 'react';
import useForm from 'hooks/useForm';
import { quickSort, getNumsArray } from 'utils';
import { Timer, Clock, InputField, OutputField } from 'components';

const Home = () => {
  const { isSubmitting, state, handleChange, handleSubmit } = useForm({
    textInput: '',
  });
  const arr = isSubmitting ? getNumsArray(state.textInput) : [];

  const ascendingNums = quickSort(arr);
  const descendingNums = [...ascendingNums].reverse();

  return (
    <div>
      <Timer isKR={true} />
      <Timer isKR={false} />
      <Clock />
      <InputField props={{ state, handleChange, handleSubmit }} />
      <OutputField result={ascendingNums} />
      <OutputField result={descendingNums} />
    </div>
  );
};

export default Home;
