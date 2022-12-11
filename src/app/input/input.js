export const Input = (params) => {

    const input = document.createElement('input');
    input.className = 'fotm-control'
    if(params?.label) input.placeholder = params.label
    if(params?.onInput) input.addEventListener(
        'input',
        e => params?.onInput({value: e.target.value})
    )

    return input;
}