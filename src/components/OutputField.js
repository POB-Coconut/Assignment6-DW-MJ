import React from 'react';
import { FaSortNumericUpAlt, FaSortNumericDownAlt } from 'react-icons/fa';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { COLOR_STYLES } from 'styles';

<<<<<<< HEAD
const OutputField = ({ result }) => {
  return <div>{result}</div>;
=======
const OutputField = ({ result, ascending }) => {
  console.log(result);

  return (
    <article css={container}>
      <div css={orderContainer}>
        {ascending ? <FaSortNumericUpAlt /> : <FaSortNumericDownAlt />}
        <span>{ascending ? '오름차순' : '내림차순'}</span>
      </div>
      <p>{result}</p>
    </article>
  );
>>>>>>> 5c8747abcd380469edc28c35b99099315a3c34f7
};

export default OutputField;

const container = css`
  flex: 1;
  width: 60%;
  position: relative;
  background-color: ${COLOR_STYLES.white};
  padding: 10px;
  margin: 20px 0;
  color: ${COLOR_STYLES.black};
`;

const orderContainer = css`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-125%);
  color: ${COLOR_STYLES.white};

  svg {
    margin-right: 3px;
    font-size: 1.2rem;
  }
`;
