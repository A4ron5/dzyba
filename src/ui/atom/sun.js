import React from 'react';
import styled, { keyframes } from 'styled-components';

const Circle = styled.div`
  position: absolute;
  top: 70%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 2.5em;
  height: 2.5em;
  margin: -1.25em;
  background: #fcf528;
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em #fcf528;
`;

const Rays = styled.div`
  position: absolute;
  top: 32px;
  left: 53px;
  display: block;
  width: 0.375em;
  height: 1.125em;
  background: #fcf528;
  border-radius: 0.25em;
  box-shadow: 0 5.375em #fcf528;
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0em;
    left: 0em;
    display: block;
    width: 0.375em;
    height: 1.125em;
    transform: rotate(60deg);
    transform-origin: 50% 3.25em;
    background: #fcf528;
    border-radius: 0.25em;
    box-shadow: 0 5.375em #fcf528;
  },
  &::before {
    transform: rotate(120deg);
  }
`;

export const Sun = () => (
  <Circle>
    <Rays />
  </Circle>
);
