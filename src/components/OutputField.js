import React from 'react';
import { FaSortNumericUpAlt, FaSortNumericDownAlt } from 'react-icons/fa';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { COLOR_STYLES } from 'styles';

const OutputField = ({ result, ascending }) => {
  return (
    <article css={container}>
      {ascending ? (
        <div css={orderContainer}>
          <FaSortNumericUpAlt />
          <span>오름차순</span>
        </div>
      ) : (
        <div css={orderContainer}>
          <FaSortNumericDownAlt />
          <span>내림차순</span>
        </div>
      )}

      <p>{result.join(',')}</p>
    </article>
  );
};

export default OutputField;

const container = css`
  flex: 1;
  width: 400px;
  height: 275px;
  position: relative;
  background-color: ${COLOR_STYLES.white};
  color: ${COLOR_STYLES.black};
  padding: 10px;
  margin: 20px 0;
  overflow-wrap: break-word;
  overflow-y: scroll;

  p {
    font-size: 1.5rem;
  }
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
