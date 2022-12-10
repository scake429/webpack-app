export const Message = (params) => {

    const message = document.createElement('div');
    message.className = 'message'
    if(params?.text) message.textContent = params.text
    setTimeout(() => message.remove(), 3000);
    
    return message;
}