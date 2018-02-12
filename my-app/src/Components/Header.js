import React from "react";
import styled, { keyframes } from "styled-components";
const changeColor = keyframes`
0%   {background-color: #CD5334;}
25%  {background-color: #C2F970;}
50%  {background-color: #007EA7;}
100% {background-color: #FFFD66;}
`;
const Head = styled.div`
  width: 100%;
  height: 5em;
  background-color: red;

  animation-name: ${changeColor};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 1em 0 0 0;
`;
const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 0 auto;
`;
const Header = props => {
  return (
    <Head>
      <Title> Choose a color </Title>
    </Head>
  );
};

export default Header;
