export const List = (items) => {
    
    const wrapper = document.createElement('div');
    wrapper.className = 'items-list'
    
    items.forEach(item => {
        const listItem =  document.createElement('div');  
        listItem.innerHTML = item;
        wrapper.appendChild(listItem);
    });

    return wrapper;
}