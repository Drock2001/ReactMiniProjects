import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button.js';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [0, 128, 244] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    console.log(this.state.color, random);
    return random;
  }

  handleClick() {
    this.setState({ color: this.chooseColor() });
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Random color generated!!! <br/><br/> {this.formatColor(this.state.color)}
          <br/>
        </h1>
        <br/><br/>
        <Button light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Random;
