import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import telephone from "../../../../assets/icons/telephone.svg";
import PreFooter from "./PreFooter";

const StyledFooter = styled.header`
  img {
    width: 35px;
    height: 35px;
    filter: invert(100%);
    padding: 5px;
    background: #80007a;
    border-radius: 50%;
  }
`;
const Footer = () => {
  return (
    <>
      <PreFooter />
      <StyledFooter className="bg-gray-900 py-9">
        <div className="flex justify-between items-center py-1 px-2 container mx-auto  text-white">
          <div className="text-xl font-bold"> {"{"}finsweet </div>

          <nav>
            <ul className="flex justify-between items-center gap-7 px-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contacts</Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center gap-3 items-center  px-5">
            <p>&copy; Copyright Finsweet {new Date().getFullYear()}</p>
          </div>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
