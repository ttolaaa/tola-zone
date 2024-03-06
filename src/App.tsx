import React from 'react';
import style from './App.module.css'

import PortfolioComponent from "./components/PortfolioComponent/PortfolioComponent"
const App = ()=> {
  return (
    <div className={style.container}>
      <PortfolioComponent/>
      
    </div>
  );
}

export default App;



