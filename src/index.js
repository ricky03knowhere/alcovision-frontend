import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import 'helpers/initFA';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <App />
      {/* <Footer /> */}
    </Main>
  </React.StrictMode>,
  document.getElementById('main')
);
