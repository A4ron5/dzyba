import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const ShadowAnim = keyframes`
  50% {
    transform: scale(1.2,1);
  }
`;

const BoxAnim = keyframes`
  17% { border-bottom-right-radius: 3px; }
  25% { transform: translateY(9px) rotate(22.5deg); }
  50% {
    transform: translateY(18px) scale(1,.9) rotate(45deg) ;
    border-bottom-right-radius: 40px;
  }
  75% { transform: translateY(9px) rotate(67.5deg); }
  100% { transform: translateY(0) rotate(90deg); }
`;

const LoaderAnim = keyframes`
  0% { left: -100px }
  100% { left: 110%; }
`;

const Shadow = styled.div`
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: ${ShadowAnim} .5s linear infinite;
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  background: #fff;
  animation: ${BoxAnim} .5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  animation: ${LoaderAnim} 5s linear infinite;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
`;

export const Loader = (props) => {
  const { loading, children } = props;
  return (loading ? (
    <Wrapper>
      <Shadow />
      <Box />
    </Wrapper>
  ) : children);
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
