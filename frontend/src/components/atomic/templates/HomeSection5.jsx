import React from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import clock from "../../../assets/icons/clock-svgrepo-com.svg";
import styled from "styled-components";

const StyledSection = styled.section`
  background: url("https://miro.medium.com/max/4320/1*JktzC9GrA_l4yz0cCy8a5Q.jpeg")
    center no-repeat;
  & > div {
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const HomeSection5 = () => {
  return (
    <>
      <StyledSection>
        <Container additionalClasses="mb-0">
          <div className="flex justify-center items-center flex-col">
            <div className="">
              <h2 className="my-5 font-bold text-4xl">
                Get your vehicle service done online at one place
              </h2>
              <Button text="Contact Us" className="my-5 bg-black" />
            </div>
          </div>
        </Container>
      </StyledSection>
      <section class="bg-gray-100">
        <Container>
          <div className="grid grid-cols-4  w-full">
            <div>
              <h2>20+</h2>
              <p>Professionals</p>
            </div>
            <div>
              <h2>10+</h2>
              <p>Years Eperience</p>
            </div>
            <div>
              <h2>12K+</h2>
              <p>Service Closed</p>
            </div>
            <div>
              <h2>100%</h2>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeSection5;
