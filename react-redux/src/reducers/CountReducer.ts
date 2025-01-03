export const initialState = 0;

export function CountReducer(state: number = initialState, action: {type: string, payload: number }){
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}