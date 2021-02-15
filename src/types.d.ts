import {Todo} from "./types/todo";
import {User} from "./types/user";
declare module 'react-redux' {
    export interface DefaultRootState{
        loader : boolean,
        todos : Array <Todo>,
        auth: {
            message: string,
            user : User,
            jwt : string
        }
    }
}