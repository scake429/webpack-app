export const Messages = (params) => {

    const messages = document.createElement('div');
    messages.className = 'messages'
    if(params?.text) messages.textContent = params.text
    setTimeout(() => messages.remove(), 3000);
    
    return messages;
}