export const Input = (params) => {
    
    // input: params.label
    // output: params.onInput

    const input = document.createElement('input');
    input.className = 'form-control'
    if(params?.label) input.placeholder = params.label
    if(params?.onInput) input.addEventListener(
        'input',
        e => params?.onInput({value: e.target.value})
    )

    return input;
}