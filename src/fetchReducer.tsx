import {Robots} from "./assets/robots.ts";


type ACTIONS = {
    type: 'FETCH' | 'RESOLVE' | 'REJECT'
    payload?: Robots[]
}
type State = {
    loading: boolean
    list: Robots[] | undefined
    error: boolean
}

export default function fetchReducer(state: State, action: ACTIONS): State {
    switch (action.type) {
        case "FETCH":
            return {
                loading: true,
                list: [],
                error: false,
            }
        case "RESOLVE":
            return {
                loading: false,
                list: action.payload,
                error: false,
            }
        case "REJECT":
            return {
                loading: false,
                list: [],
                error: true,
            }
        default:
            return state

    }
}