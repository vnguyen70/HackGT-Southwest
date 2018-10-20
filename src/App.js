import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import EsriLoaderReact from 'esri-loader-react';

class App extends Component {
  render() {
    const options = {
      url: 'https://js.arcgis.com/4.9/'
    };

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className = "App-header">
            Simpliflight
          </h1>
          <p className = "Paragraphs">
            Username
            <br/>
            Password
          </p>


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
