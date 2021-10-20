import React from "react";
import fb from "../../../../assets/icons/facebook-svgrepo-com.svg";
import linkedin from "../../../../assets/icons/linkedin-svgrepo-com.svg";
import instagram from "../../../../assets/icons/instagram-svgrepo-com.svg";
import twitter from "../../../../assets/icons/twitter-svgrepo-com.svg";
import styled from "styled-components";

const StyledSection = styled.section`
  img {
    width: 30px;
    height: 30px;
    filter: invert(1);
  }
`;
const PreFooter = () => {
  return (
    <StyledSection className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-start items-center py-5">
        <div className="p-10">
          <h2 className="font-bold text-3xl w-3/4 py-3">
            Get in touch with us for your service
          </h2>
          <div className="flex justify-start items-center gap-2 py-3">
            <img src={fb} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div>
          <div className="p-3">
            <p>Help line November</p>
            <p className="font-bold text-xl">1800 265 24 52</p>
          </div>
          <div className="p-3">
            <p>Adress</p>
            <p className="font-bold text-xl">
              NH 234 Public Square San Francisco 65368
            </p>
          </div>
          <div className="p-3">
            <p>We are open</p>
            <p className="font-bold text-xl">
              Monday to Friday 9:00 AM to  10:00  AM
            </p>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default PreFooter;
