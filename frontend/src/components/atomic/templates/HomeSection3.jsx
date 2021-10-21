import React from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import clock from "../../../assets/icons/clock-svgrepo-com.svg";
import styled from "styled-components";
import one from "../../../assets/icons/one-svgrepo-com.svg";
import two from "../../../assets/icons/two-svgrepo-com.svg";
import three from "../../../assets/icons/three-svgrepo-com.svg";

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
  :after {
    content: "";
    top: 30px;
    left: -18px;
    position: absolute;
    display: block;
    /* transform: translate(-50%, -50%); */
    width: 100%;
    height: 80%;
    /* background: #fc0000; */
    border-left: 2px dotted orange;
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
            <p className="my-5 ">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire
            </p>
            <Button text="Learn More" />
          </div>
          <div className="relative">
            {/*//! Process 1 */}
            <StyledDiv className="relative my-7 ml-8">
              <img
                src={one}
                alt="clock"
                className="absolute top-3 left-0 w-8 h-8 transform -translate-x-full -translate-y-1/2 "
              />
              <h2 className=" font-bold my-1">Get a Quote </h2>
              <p className="text-gray-600">
                Through True Rich Attended does no end it his mother since real
                had half every.
              </p>
            </StyledDiv>
            {/*//! Process 2 */}
            <StyledDiv className="relative my-7 ml-8">
              <img
                src={two}
                alt="clock"
                className="absolute top-3 left-0 w-8 h-8 transform -translate-x-full -translate-y-1/2 "
              />
              <h2 className=" font-bold my-1">Book an Appointment </h2>
              <p className="text-gray-600">
                Through True Rich Attended does no end it his mother since real
                had half every.
              </p>
            </StyledDiv>
            {/*//! Process 3 */}
            <div className="relative my-7 ml-8">
              <img
                src={three}
                alt="clock"
                className="absolute top-3 left-0 w-8 h-8 transform -translate-x-full -translate-y-1/2 "
              />
              <h2 className=" font-bold my-1">Get your Service Done </h2>
              <p className="text-gray-600">
                Through True Rich Attended does no end it his mother since real
                had half every.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection3;
