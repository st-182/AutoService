import React from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import clock from "../../../assets/icons/clock-svgrepo-com.svg";
import styled from "styled-components";

const StyledButton = styled(Button)`
  position: absolute;
  top: 25px;
  left: 25px;
  border-radius: 50px;
  padding-left: 60px;
  outline: 10px solid rgba(255, 255, 255, 0.5);
  background: white;
  color: black;
  :before {
    content: "24h";
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 44px;
    height: 44px;
    background: #84e2c2;
    border-radius: 50%;
    color: white;
  }
`;
const StyledButton2 = styled(StyledButton)`
  top: initial;
  left: initial;
  bottom: 25px;
  right: 25px;
  :after {
    content: "";
    top: 50%;
    right: 0;
    position: absolute;

    display: block;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 20px;
    background: white;
  }
  :before {
    content: "4.5/5";
  }
`;

const HomeSection3 = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-center items-center">
          <div className="">
            <h2 className="my-5 font-bold text-4xl">
              We follow a clear process to help you out.
            </h2>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire
            </p>
            <Button text="Learn More" />
          </div>
          <div className="relative"></div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection3;
