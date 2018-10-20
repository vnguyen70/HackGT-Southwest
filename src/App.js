import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <nav> hi </nav>
        </header>
        <p className="App-intro">
          Hello world!
        </p>
      </div>
    );
  }


}

// const NavComponent = React.createClass({
//     render: function() {
//         return (
//             <nav>
//                 <div className="navWide">
//                     <div className="wideDiv">
//                         <a href="#">Link 1</a>
//                         <a href="#">Link 2</a>
//                         <a href="#">Link 3</a>
//                     </div>
//                 </div>
//                 <div className="navNarrow">
//                     burgerToggle: function() {
//                     let linksEl = document.querySelector('.narrowLinks');
//                     if (linksEl.style.display === 'block') {
//                     linksEl.style.display = 'none';
//                 } else {
//                     linksEl.style.display = 'block';
//                 }
//                 }
//                     <a href="#" onClick={this.burgerToggle}>Link 1</a>
//                     <i className="fa fa-bars fa-2x"></i>
//                     <div className="narrowLinks">
//                         <a href="#">Link 1</a>
//                         <a href="#">Link 2</a>
//                         <a href="#">Link 3</a>
//                     </div>
//                 </div>
//             </nav>
//         );
//     }
// });

export default App;
