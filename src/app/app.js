import Pizza from './../pizza.png';
import { List } from "./list/list";
import { Input } from "./input/input";
import { pizzaItemsData } from "../data/pizza-list";

const itemsData = pizzaItemsData;

export const App = (onListItemClick) => {
    const appContainer = document.createElement('div');
    appContainer.className = 'app';
    appContainer.innerHTML = '<h1>This is App component</h1>';

    const searchInput = Input({
        label: 'Search',
        onInput: e => {
            const filteredItems = itemsData
                .filter(item => (new RegExp(e.value, 'ig')).test(item))
            listWrapper.innerHTML = '';
            const list = List(filteredItems, {onItemClick: onListItemClick}); 
            listWrapper.appendChild(list);
        }
    });
    appContainer.appendChild(searchInput);

    const listWrapper = document.createElement('div');
    listWrapper.className = 'list-wrapper';
    appContainer.appendChild(listWrapper);

    const list = List(itemsData, {onItemClick: onListItemClick});   
    listWrapper.appendChild(list);

    const myIcon = new Image();
    myIcon.src = Pizza;
    appContainer.appendChild(myIcon); 

    return appContainer;
}