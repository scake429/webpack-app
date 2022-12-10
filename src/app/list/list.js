export const List = (items, params) => {
    
    const wrapper = document.createElement('div');
    wrapper.className = 'items-list'
    
    items.forEach(item => {
        const listItem =  document.createElement('div');  
        listItem.innerHTML = item;
        if(params?.onItemClick) listItem.addEventListener('click', params.onItemClick)
        wrapper.appendChild(listItem);
    });

    return wrapper;
}