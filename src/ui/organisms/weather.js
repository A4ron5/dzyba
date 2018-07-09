import React from 'react';
import styled from 'styled-components';
import { WeatherIcon } from '../molecules';

const Container = styled.div`
  display: flex;
  width: 1170px;
  margin: 0 auto;
  color: #84b2ff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: 0 auto;
`;

const Icon = styled.div`
  position: relative;
  width: 150px;
  height: 115px;
`;

const Degree = styled.span`
  font-size: 35px;
`;

const City = styled.span`
  margin-left: auto;
  padding-right: 35px;
  font-size: 24px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #4988ed;
  }
`;

const Condition = styled.span`
  font-size: 24px;
  padding-left: 35px;
`;

const FooterBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const BlockName = styled.span`
  text-align: center;
  font-size: 18px;
  opacity: 0.7;
  padding-bottom: 10px;
`;

const BlockDescr = styled.span`
  font-size: 22px;
  text-align: center;
`;

const Top = styled.section`
  display: flex;
`;

const Middle = styled.section`
  display: flex;
  align-items: center;
`;

const Bottom = styled.section`
  margin-bottom: 30px;
`;

const Footer = styled.section`
  display: flex;
`;

export const WeatherUI = (props) => {
  const { onClick, city, condition, degree, wind, pressure, humidity } = props;
  return (
    <Container>
      <Wrapper>
        <Top>
          <City onClick={onClick}>{city}</City>
        </Top>
        <Middle>
          <Icon>
            <WeatherIcon condition={condition} />
          </Icon>
          <Degree>{degree}°</Degree>
          <Condition>{condition}</Condition>
        </Middle>
        <Bottom>
        </Bottom>
        <Footer>
          <FooterBlock>
            <BlockName>Wind</BlockName>
            <BlockDescr>{wind} m/s</BlockDescr>
          </FooterBlock>
          <FooterBlock>
            <BlockName>Pressure</BlockName>
            <BlockDescr>{pressure} mm Hg</BlockDescr>
          </FooterBlock>
          <FooterBlock>
            <BlockName>Humidity</BlockName>
            <BlockDescr>{humidity} %</BlockDescr>
          </FooterBlock>
        </Footer>
      </Wrapper>
    </Container>
  );
};
