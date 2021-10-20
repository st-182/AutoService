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

const HomeSection1 = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-center items-center">
          <div className="">
            <h2 className="my-5 font-bold text-4xl">
              Get your vehicle service done online at one place
            </h2>
            <Button text="Book a service" className="my-5" />
            <div className="relative my-5 ml-8">
              <img
                src={clock}
                alt="clock"
                className="absolute top-1/2 left-0 w-8 h-8 transform -translate-x-full -translate-y-1/2 "
              />
              <p className="text-gray-400">We are open </p>
              <p className="font-bold">Monday to Friday 9:00 AM to 10:00 AM</p>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full"
              src="https://www.autoservis-garant.cz/wp-content/uploads/2019/02/autoservis-garant-praha-strasnice00006-1024x683.jpg"
              alt="picture"
            />
            <StyledButton text="Quick Service" />
            <StyledButton2 text="Rating: ⭐⭐⭐⭐⭐" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection1;
