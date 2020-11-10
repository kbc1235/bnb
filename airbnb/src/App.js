import React from 'react';
import './css/layout.scss';


//layout
import Header from './layout/header';
import Content from './layout/content';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
