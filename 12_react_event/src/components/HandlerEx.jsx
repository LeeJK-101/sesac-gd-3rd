import { Component } from 'react';

export default class HandlerEx extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    msg: 'Hello world',
  };

  handleClick() {
    {
      this.setState({ msg: 'Goodbye World!' });
    }
  }
  render() {
    return (
      <>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleClick}>클릭</button>
      </>
    );
  }
}
