import React from 'react';
import { connect } from 'react-redux';
import { Button, InputUI, Form } from '../../ui/atom';
import { fetchWeather } from '../weather/action';

export class InputRaw extends React.Component {

  state = {
    city: '',
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.city)
    this.props.handleOpen();
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  render() {
    return (
      this.props.isOpen ? 
      (
        <Form>
          <InputUI onChange={this.handleChange} />
          <Button onClick={this.handleClick}>ok</Button>
        </Form>
      ) : null
    )
  }
}

export const Input = connect(null, { fetchWeather })(InputRaw)
