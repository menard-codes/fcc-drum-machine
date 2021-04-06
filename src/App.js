import React, { Component } from 'react';
import Drumpad from './components/Drumpad_Component/Drumpad';
import Display from './components/Display_Component/Display';
import './scss/app.scss'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_key: ''
    }

    this.drumpadPress = this.drumpadPress.bind(this);
  }

  drumpadPress(key_description) {
    this.setState({
      current_key: key_description
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="drum-machine__container">
          <Display current_key={this.state.current_key} />
          <Drumpad changeDisplay={this.drumpadPress} />
        </div>
      </div>
    );
  }
}

export default App;
