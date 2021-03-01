import React from 'react';
// import React, { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// import Login from './components/Login';
import TodoList from './components/TodoList';
// import InternetSpeed from './components/InternetSpeed';
library.add(fab, fas, far);



function App() {


  return (
    <div className="App">
      <TodoList />
      {/* <InternetSpeed/> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
