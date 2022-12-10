import { App } from './app/app';
import { Messages } from './app/messages/messages';
import './style.css';

const sayClickedWord = e => {
    document.body.appendChild(Messages({text: e.target.textContent}))
}
const app = App(sayClickedWord)

document.body.appendChild(app);

