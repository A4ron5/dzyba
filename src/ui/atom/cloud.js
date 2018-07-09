import React from 'react';
import styled, { keyframes } from 'styled-components';

const clouldAnim = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.3; }
  100% {
    opacity: 0;
    transform: scale(0.6) translate(-200%, -3em);
  }
`;

export const Cloudy = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    -2.1875em 0.6875em 0 -0.6875em #fff,
    2.0625em 0.9375em 0 -0.9375em #fff,
    0 0 0 0.375em #84b2ff,
    -2.1875em 0.6875em 0 -0.3125em #84b2ff,
    2.0625em 0.9375em 0 -0.5625em #84b2ff;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -0.5em;
    display: block;
    width: 4.5625em;
    height: 1em;
    background: #fff;
    box-shadow: 0 0.4375em 0 -0.0625em #84b2ff;
  }
  &:nth-child(2){
    z-index: 0;
    background: #fff;
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em #fff,
      2.0625em 0.9375em 0 -0.9375em #fff,
      0 0 0 0.375em #fff,
      -2.1875em 0.6875em 0 -0.3125em #fff,
      2.0625em 0.9375em 0 -0.5625em #fff;
    opacity: 0.3;
    transform: scale(0.5) translate(6em, -3em);
    animation: ${clouldAnim} 4s linear infinite;
    &::after{
      background: #fff;
      box-shadow: 0 0.4375em 0 -0.0625em #fff;
    }
  }
`;

export const Cloud = () => (
  <React.Fragment>
    <Cloudy />
    <Cloudy />
  </React.Fragment>
);
