import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const StyledButton = styled.button`
  border-radius: 5px;
  color: ${({ primary }) => (primary ? `blue` : `white`)};
  background: ${({ primary }) => (primary ? `blue` : `white`)};

  border: 1px solid white;
`;
const Button = ({ text, action, primary }) => {
  return (
    <StyledButton primary={primary} onClick={action}>
      {text}
    </StyledButton>
  );
};

Button.protoTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  size: PropTypes.number,
};
export default Button;
