import logo from './logo.svg';
import './App.css';
import { drumkit } from './scripts/drumkit.js';

import boom from './sounds/boom.wav'
import clap from './sounds/clap.wav'
import hihat from './sounds/hihat.wav'
import kick from './sounds/kick.wav'
import openhat from './sounds/openhat.wav'
import ride from './sounds/ride.wav'
import snare from './sounds/snare.wav'
import tink from './sounds/tink.wav'
import tom from './sounds/tom.wav'


function App() {
  return (
    <div className="App">
      <div className="keys">
    <div data-key="65" className="key">
      <kbd>A</kbd>
      <span className="sound">clap</span>
    </div>
    <div data-key="83" className="key">
      <kbd>S</kbd>
      <span className="sound">hihat</span>
    </div>
    <div data-key="68" className="key">
      <kbd>D</kbd>
      <span className="sound">kick</span>
    </div>
    <div data-key="70" className="key">
      <kbd>F</kbd>
      <span className="sound">openhat</span>
    </div>
    <div data-key="71" className="key">
      <kbd>G</kbd>
      <span className="sound">boom</span>
    </div>
    <div data-key="72" className="key">
      <kbd>H</kbd>
      <span className="sound">ride</span>
    </div>
    <div data-key="74" className="key">
      <kbd>J</kbd>
      <span className="sound">snare</span>
    </div>
    <div data-key="75" className="key">
      <kbd>K</kbd>
      <span className="sound">tom</span>
    </div>
    <div data-key="76" className="key">
      <kbd>L</kbd>
      <span className="sound">tink</span>
    </div>
  </div>

  <audio data-key="65" src={boom} controls />
  <audio data-key="83" src={hihat}></audio>
  <audio data-key="68" src={kick}></audio>
  <audio data-key="70" src={openhat}></audio>
  <audio data-key="71" src={clap}></audio>
  <audio data-key="72" src={ride}></audio>
  <audio data-key="74" src={snare}></audio>
  <audio data-key="75" src={tom}></audio>
  <audio data-key="76" src={tink}></audio>
    </div>
  );
}

export default App;
