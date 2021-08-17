import React, { useCallback } from 'react';
import { BsArrowRepeat, BsTrash } from 'react-icons/bs';
/** @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from '@emotion/react';
import { COLOR_STYLES } from 'styles';

const InputField = ({ inputValue, setInputValue, handleSubmit }) => {
  const handleChange = useCallback(
    (e) => {
      const word = e.target.value;
      setInputValue(word);
    },
    [setInputValue]
  );

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <textarea
        name='inputValue'
        rows='5'
        value={inputValue}
        onChange={handleChange}
        placeholder='숫자를 아래와 같이 입력해주세요. &#10;e.g. 1,2,3,4'
      ></textarea>
      <div css={btnContainer}>
        <button>
          <BsArrowRepeat css={spin} />
        </button>
        <button>
          <BsTrash />
        </button>
      </div>
    </form>
  );
};

export default InputField;

const formStyle = css`
  flex: 1;

  textarea {
    height: 100%;
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    padding: 10px;
    border-radius: 3px;
    resize: none;
  }
`;

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const btnContainer = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  button {
    background-color: inherit;
    margin: 10px;
    border: 0;
    cursor: pointer;

    svg {
      font-size: 5rem;
      color: ${COLOR_STYLES.white};
      transition: all 0.2s;
    }

    :hover {
      svg {
        color: ${COLOR_STYLES.greyDarker};
      }
    }
  }
`;

const spin = css`
  animation: ${spinner} 1s linear infinite;
`;
