import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import Container from './components/Container';
import Main from './components/Main';


const App = () => (
  <Container>
    <Main />
  </Container>
);


ReactDOM.render(<App />, document.getElementById('app'));
