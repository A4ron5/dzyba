import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.scss';
import { Main } from './main';

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 100px; 
  position: relative;
  max-width: 1170px;
`;

const Index = () => (
  <Wrapper>
    <Main />
  </Wrapper>
);
ReactDOM.render(<Index />, document.getElementById('index'));
