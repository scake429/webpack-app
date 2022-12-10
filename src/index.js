import _ from 'lodash';
import { App } from './app/app';
import './style.css';



function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack11'], ' ');
    element.classList.add('hello');
    console.log('I get called from index.js');

    return element;
  }

  document.title = 'This is my APP'
  document.body.innerHTML = `
    <h1>Hello Webpack!</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, numquam cum minus amet molestias, expedita ea rem doloribus iste exercitationem voluptatum recusandae libero? Vero quisquam molestias temporibus quae sunt quis. 
    </p>    
  `;
  document.body.appendChild(component());


  document.body.appendChild(App());

