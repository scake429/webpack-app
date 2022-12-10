import { List } from "./list/list";
import Pizza from './../pizza.png';

export const App = () => {
    const element = document.createElement('div');
    element.className = 'app';
    element.innerHTML = '<h2>This is App component</h2>';

    const items = ['Никита','Наташа','Гриша','Буреки с тыквой','Асин невкусный корм'];
   
    element.appendChild(List(items));

    const myIcon = new Image();
    myIcon.src = Pizza;
    element.appendChild(myIcon); 

    return element;
}