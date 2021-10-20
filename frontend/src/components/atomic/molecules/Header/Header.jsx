import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import telephone from "../../../../assets/icons/telephone.svg";
const StyledHeader = styled.header`
  img {
    width: 35px;
    height: 35px;
    filter: invert(100%);
    padding: 5px;
    background: #80007a;
    border-radius: 50%;
  }
`;

const Header = () => {
  return (
    <StyledHeader className=" ">
      <div className="flex justify-between items-center py-1 px-2 container mx-auto">
        <div className="text-xl font-bold"> {"{"}finsweet </div>
        <div className="flex justify-center  items-center ">
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
          <div className="flex justify-center gap-3 items-center border-gray-300 border-l-2 px-5">
            <img src={telephone} alt="telephone" />
            <div>
              <p>Road Assistance</p>
              <p>1800 265 24 52</p>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
