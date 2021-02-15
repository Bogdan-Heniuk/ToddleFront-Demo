import React, {useState} from 'react'
interface Options{
    onEnter? : () => void
}
interface UseInputValueProvided{
    bind : React.HTMLAttributes<HTMLInputElement> & {value : string}
    value : () => string,
    clear : () => void
}
function useInputValue(defaultValue : string = '', options : Options = {}){
    const [value, setValue] = useState <string> (defaultValue)
    const {onEnter} = options
    const handleKeyDown = (event : React.KeyboardEvent <HTMLInputElement>) => {
        if (event.key === 'Enter' && typeof onEnter === 'function') {
            onEnter()
        }
    }
    const provided : UseInputValueProvided = {
        bind: {
            onKeyDown: handleKeyDown,
            value,
            onChange: (event : React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
        },
        value: () => value,
        clear: () => setValue('')
    }

    return provided
}

export default useInputValue