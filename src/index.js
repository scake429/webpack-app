import { App } from './app/app';
import './style.css';

document.body.innerHTML = `
<h1>Hello Webpack!</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, numquam cum minus amet molestias, expedita ea rem doloribus iste exercitationem voluptatum recusandae libero? Vero quisquam molestias temporibus quae sunt quis. 
</p>    
`;

document.body.appendChild(App());

