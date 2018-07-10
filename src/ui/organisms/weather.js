import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { WeatherIcon } from '../molecules';

const Container = styled.div`
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
  text-align: center;
`;

const City = styled.span`
  margin-left: auto;
  width: 33%;
  text-align: center;
  font-size: 24px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #4988ed;
  }
`;

const Condition = styled.span`
  font-size: 24px;
  text-align: center;
`;

const Block = styled.div`
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
  const {
    onClick, city, condition, degree, wind, pressure, humidity,
  } = props;
  return (
    <Container>
      <Wrapper>
        <Top>
          <City onClick={onClick}>
            {city}
          </City>
        </Top>
        <Middle>
          <Block>
            <Icon>
              <WeatherIcon condition={condition} />
            </Icon>
          </Block>
          <Block>
            <Degree>
              {degree}
              {'°'}
            </Degree>
          </Block>
          <Block>
            <Condition>
              {condition}
            </Condition>
          </Block>
        </Middle>
        <Bottom />
        <Footer>
          <Block>
            <BlockName>
              {'Wind'}
            </BlockName>
            <BlockDescr>
              {wind}
              {' m/s'}
            </BlockDescr>
          </Block>
          <Block>
            <BlockName>
              {'Pressure'}
            </BlockName>
            <BlockDescr>
              {pressure}
              {' mm Hg'}
            </BlockDescr>
          </Block>
          <Block>
            <BlockName>
              {'Humidity'}
            </BlockName>
            <BlockDescr>
              {humidity}
              {' %'}
            </BlockDescr>
          </Block>
        </Footer>
      </Wrapper>
    </Container>
  );
};

WeatherUI.propTypes = {
  onClick: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
  degree: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};
