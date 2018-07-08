import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.scss';
import { Main } from './main';

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-top: 100px; 
`;

const Index = () => (
  <Wrapper>
    <Main />
  </Wrapper>
);
ReactDOM.render(<Index />, document.getElementById('index'));
