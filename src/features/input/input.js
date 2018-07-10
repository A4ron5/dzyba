import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, InputUI, Form } from '../../ui/atom';
import { fetchWeather } from '../weather/action';

export class InputRaw extends React.Component {
  static propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    handleOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }

  state = {
    city: '',
  }

  handleClick = (e) => {
    const { fetchWeather, handleOpen } = this.props;
    const { city } = this.state;
    e.preventDefault();
    fetchWeather(city);
    handleOpen();
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  }

  render() {
    const { isOpen } = this.props;
    return (
      isOpen
        ? (
          <Form>
            <InputUI onChange={this.handleChange} />
            <Button onClick={this.handleClick}>
              {'ok'}
            </Button>
          </Form>
        ) : null
    );
  }
}

export const Input = connect(null, { fetchWeather })(InputRaw);
