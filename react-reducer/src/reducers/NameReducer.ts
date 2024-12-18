export const initialState = "Name";

export function nameReducer(state: string = initialState, action: { firstName: string, lastName: string }) {
   return state = action.firstName + " " + action.lastName;
}