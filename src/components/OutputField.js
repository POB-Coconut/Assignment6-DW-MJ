import React from "react";
import styled from "styled-components";

const OutputField = ({ result }) => {
  return (
    <OutputWrapper>
      {result.map((v, i) => (
        <p key={i}>{v}</p>
      ))}
    </OutputWrapper>
  );
};

export default OutputField;

const OutputWrapper = styled.div`
  display: flex;

  p {
    padding-right: 5px;
  }
`;
