import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n/i18next'; 
import "swiper/css/bundle";





import './index.css';
import App from './App';
import Main from './Pages/Main';

ReactDOM.render(
  <Suspense fallback={(<div>Loading ~~~</div>)}>
    <App />
  </Suspense>,
  document.getElementById('root')
);



export default function MainPage() {
  return (
    <section>
        <Main />
    </section>
  )
}