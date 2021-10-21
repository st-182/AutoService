import React from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import styled from "styled-components";
import diagnostics from "../../../assets/icons/section3/diagnostic-svgrepo-com.svg";
import engine from "../../../assets/icons/section3/engine-svgrepo-com.svg";
import wheel from "../../../assets/icons/section3/wheel-svgrepo-com.svg";
import oil from "../../../assets/icons/section3/oil-svgrepo-com.svg";
import car from "../../../assets/icons/section3/car-svgrepo-com.svg";
import batteries from "../../../assets/icons/section3/batteries-svgrepo-com.svg";
import insurance from "../../../assets/icons/section3/insurance-svgrepo-com.svg";
import customServices from "../../../assets/icons/section3/google-custom-search-svgrepo-com.svg";

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
const StyledDiv = styled.div`
  & > * {
    padding: 50px;
    background: white;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 30px;
    }
  }
`;

const HomeSection4 = () => {
  return (
    <section className="bg-gray-200">
      <Container>
        <div className="flex justify-center items-center flex-col">
          <div className="">
            <p className="text-gray-400">What we Offer </p>
            <h2 className="my-5 font-bold text-4xl">
              We offer full service auto repair & maintenance
            </h2>
          </div>
          <StyledDiv className="grid grid-cols-4 gap-1">
            <div>
              <img src={diagnostics} alt="diagnostics" />
              <h3>Diagnostics </h3>
            </div>
            <div>
              <img src={engine} alt="engine" />
              <h3>Engine Repair</h3>
            </div>
            <div>
              <img src={wheel} alt="wheel" />
              <h3>Wheel Repair</h3>
            </div>
            <div>
              <img src={oil} alt="oil" />
              <h3>Oil Filter</h3>
            </div>
            <div>
              <img src={car} alt="car body" />
              <h3>Body Work</h3>
            </div>
            <div>
              <img src={batteries} alt="batteries" />
              <h3>Batteries</h3>
            </div>
            <div>
              <img src={insurance} alt="insurance" />
              <h3>Insurance Claim</h3>
            </div>
            <div>
              <img src={customServices} alt="custom services" />
              <h3>Custom Service</h3>
            </div>
          </StyledDiv>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection4;
