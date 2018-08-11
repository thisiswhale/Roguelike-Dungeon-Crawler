import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Player from './features/player'
import './style.scss';

//import Container from './features/Container';
// import Main from './features/Main';

class App extends Component{
  render(){
    return (
      <div>
        <Player/>
      </div>
    )
  }
}

export default App;
