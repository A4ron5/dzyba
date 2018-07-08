import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Cloudy } from './cloud';

const snowAnim = keyframes`
  100% { transform: rotate(360deg); }
`;

const Snowy = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 60%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
`;

const Flake = styled.div`
  &::after, &::before {
    content: '\\2744';
    position: absolute;
    top: 50%;
    left: 35%;
    margin: -1.025em 0 0 -1.0125em;
    color: #fff;
    opacity: 0.4;
    animation: ${snowAnim} 8s linear infinite reverse;
  }
  &::after {
    margin: 0.125em 0 0 -1em;
    font-size: 1.5em;
    opacity: 0.8;
    animation: spin 14s linear infinite;
  }
  &:nth-child(2) {
    &::before {
      margin: -0.5em 0 0 0.25em;
      font-size: 1.25em;
      opacity: 0.4;
      animation: ${snowAnim} 10s linear infinite;
    }
    &::after {
      margin: 0.375em 0 0 0.125em;
      font-size: 2em;
      opacity: 0.8;
      animation: ${snowAnim} 16s linear infinite reverse;
    }
  }
`;

export const Snow = () => (
  <Cloudy>
    <Snowy>
      <Flake />
      <Flake />
    </Snowy>
  </Cloudy>
);
