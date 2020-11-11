import React from 'react';
import './css/layout.scss';


//layout
import Header from './layout/header';
import Content from './layout/content';

//component
import Covid from './component/covid';

function App() {
  return (
    <>
      <Covid/>
      <div className="wrap">
      <Header></Header>
      <Content></Content>
      </div>
    </>
  );
}

export default App;
