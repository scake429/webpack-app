import { App } from './app/app';
import { Message } from './app/message/message';
import './style.css';

const showClickedInMessage = e => {
    const message = Message({text: e.target.textContent});
    document.body.appendChild(message)
}
const app = App(showClickedInMessage)

document.body.appendChild(app);

