import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const StyledButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  color: ${({ primary }) => (primary ? `#FF6433` : `white`)};
  background: ${({ primary }) => (!primary ? `#FF6433` : `white`)};

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
  primary: PropTypes.bool,
};
export default Button;
