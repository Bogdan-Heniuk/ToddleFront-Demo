import React from 'react'
import {Todo} from './types/todo'
interface ContextValue{
    openEditModal : (id : Todo['_id']) => void
    onToggle : (id : Todo['_id']) => Promise <void>
}
const Context = React.createContext <ContextValue> (null)

export default Context