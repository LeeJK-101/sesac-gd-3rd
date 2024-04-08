import { Component } from 'react';
export default class ClassComponent extends Component {
  state = { number: 0 };
  render() {
    const { number } = this.state;
    return (
      <>
        <h1>클래스형 컴포넌트에서 state 사용 실습</h1>
        <h1>{number}</h1>

        <button onClick={() => this.setState({ number: number + 2 }) + 2}>
          {' '}
          + 2{' '}
        </button>
        <button onClick={() => this.setState({ number: number - 1 }) - 1}>
          {' '}
          - 1{' '}
        </button>
      </>
    );
  }
}
