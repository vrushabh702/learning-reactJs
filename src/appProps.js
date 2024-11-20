import React from 'react';
import Greet from './props/learningProps';
import Welcome from './props/Welcome';

function AppProps() {
  return (
    <div className="App">
      <Greet name="komal" heroName='badman'  >
        <p>Thkkis is a children props</p>
      </Greet>
      <Greet name='neha' heroName='superman'>
        <button>Action</button>
      </Greet>
      <Greet name='sonal' heroName='spiderman'></Greet>
      <Welcome name='komal' heroName='bandman'/>
      <Welcome name='neha' heroName='superman'/>
      <Welcome name='sonal' heroName='spiderman'/>
      <Welcome/>
    </div>
  );
}

export default AppProps;
