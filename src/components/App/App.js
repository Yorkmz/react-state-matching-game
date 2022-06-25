import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel';
import Board from '../Board';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props),
      this.state = {
        numTiles: 36,
        playing: false,
        previousTileIndex: null,
        tiles: [],
        toBeCleared: null,
      }
  }
  startGame = (numTiles) => (
    this.setState((state) => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
    }
    ),
    )
  )
  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          Turbo-Matcher
        </header>
        <OptionsPanel playing={props.playing} numTiles={props.numTiles} />
        <Board numTiles={props.numTiles} tiles={props.tiles} />
      </div>
    );
  }
}

export default App;
