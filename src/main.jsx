import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

app.load('https://my.spline.design/boxeshover-AWsewAy3XOKzhzNMX5kUCeT3/')
  .then(() => {
    console.log('Spline scene loaded.');

    // Optional interactivity example:
    app.addEventListener('mouseDown', e => {
      console.log('Clicked object:', e.target.name);
    });
  })
  .catch(err => console.error('Error loading scene:', err));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
