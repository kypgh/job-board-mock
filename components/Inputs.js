import React from "react";
import styled from "styled-components";
import { Flex } from "./generic";
import PropTypes from "prop-types";

const Handler = styled(Flex)`
  & span {
    text-transform: capitalize;
    color: #ff0000;
    font-size: 14px;
    font-weight: 600;
  }
  &[data-error="true"] {
    input {
      border-color: #ff0000;
    }
  }
`;

//prettier-ignore
const InputSC = styled.input.attrs(({ width }) => ({
  width,
}))
`
  background-color: #fdfdfd;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s all ease;
  ${({ width }) => width && `width: ${width};`}

  &:focus {
    outline: none;
  }
`;

/**
 * Input component
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - The props for the Input component
 * @returns {React.ReactElement<HTMLInputElement, string>}
 */
const Input = ({ ...rest }) => {
  return <InputSC {...rest} />;
};

const LabelSC = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

/**
 * Input component
 * @typedef {Object} InputProps
 * @property {string} [error] - Error message
 * @property {string} [label] - Input label
 * @property {string} [width] - Input label
 * @property {string} name - Input name
 *
 * @param {React.InputHTMLAttributes<HTMLInputElement> & InputProps} props - The props for the Input component
 * @returns {React.ReactElement<HTMLInputElement, string>}
 */
const InputWithError = ({ error, label, width, name, ...rest }) => {
  const _id = rest.id || name;
  const _error = typeof error === "object" ? error[name] : error;

  return (
    <Handler
      $direction="column"
      $align="flex-start"
      $gap={5}
      data-error={!!_error}
    >
      <LabelSC htmlFor={_id}>{label}</LabelSC>
      <InputSC id={_id} {...rest} width={width} />
      {_error && <span>{_error}</span>}
    </Handler>
  );
};

InputWithError.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Input, InputWithError };
