import React from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import clock from "../../../assets/icons/clock-svgrepo-com.svg";

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
            <Button />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection1;
