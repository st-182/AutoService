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

const HomeSection2 = () => {
  return (
    <section className="bg-gray-200">
      <Container>
        <div className="flex justify-center items-center">
          {/*//! First Column */}
          <div className="">
            <h2 className="my-5 font-bold text-4xl my-10">
              We are taking car servicing seriously
            </h2>
            {/*//! Advantage 1 */}
            <div className="relative my-7 ml-8">
              <img
                src={clock}
                alt="clock"
                className="absolute top-1/2 left-0 w-8 h-8 transform -translate-x-full -translate-y-1/2 "
              />
              <h2 className=" font-bold my-1">Convenient service </h2>
              <p className="text-gray-600">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
            {/*//! Advantage 2 */}
            <div className="relative my-7 ml-8">
              <img
                src={clock}
                alt="clock"
                className="absolute top-1/2 left-0 w-8 h-8 transform -translate-x-full -translate-y-1/2 "
              />
              <h2 className=" font-bold my-1">Expert mechanics </h2>
              <p className="text-gray-600">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
            {/*//! Advantage 3 */}
            <div className="relative my-7 ml-8">
              <img
                src={clock}
                alt="clock"
                className="absolute top-1/2 left-0 w-8 h-8 transform -translate-x-full -translate-y-1/2 "
              />
              <h2 className=" font-bold my-1">Transparent pricing </h2>
              <p className="text-gray-600">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
            <div className="my-10">
              <a href="#">Know more about us</a>
            </div>
          </div>
          {/*//! Second Column */}
          <div className="relative flex-1">
            <h2 className="my-5 font-bold text-2xl px-5">
              Get a quote for the car service
            </h2>
            <form className="p-5">
              <input
                type="text"
                placeholder="location"
                className="p-3 w-full m-1"
              />
              <input
                type="text"
                placeholder="duration"
                className="p-3 w-full m-1"
              />
              <input
                type="text"
                placeholder="navigation"
                className="p-3 w-full m-1"
              />
              <input
                type="text"
                placeholder="revelation"
                className="p-3 w-full m-1 mb-4"
              />
              <Button text="Get your quote" />
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection2;
