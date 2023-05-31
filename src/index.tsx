import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cabecalho from './componentes/Cabecalho';
import Card from './componentes/Card';

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho />
    <Card />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);