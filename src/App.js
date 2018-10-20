import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EsriLoaderReact from 'esri-loader-react';

class App extends Component {
  render() {
    const options = {
      url: 'https://js.arcgis.com/4.9/'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
        <EsriLoaderReact 
          options={options} 
          modulesToLoad={['esri/Map', 'esri/views/MapView']}    
          onReady={({loadedModules: [Map, MapView], containerNode}) => {
            new MapView({
              container: containerNode,
              map: new Map({basemap: 'topo'})
            })
          }}
        />

      </div>
    );
  }
}

export default App;
