import { Question } from "../../interfaces/interfaces";

const initialUserState = {
    forms: []
}

const formReducers = (state = initialUserState, action: any) => {
    switch (action.type) {
      case 'ADD_ITEMS':
        console.log('items adding', action.newItem);
        return { 
            ...state,
            forms: [...state.forms, action.newItem]
         }
      case 'REMOVE_ITEMS':
        // TODO: Check efficiently or better way to do this
        return { 
          ...state,
          forms: state.forms.sort((a: Question, b: Question) => a.order - b.order)
            .filter( (item: Question) => item.id != action.payload)
            .map( (item: Question, index) => { return { ...item , order: index + 1}}) 
        }
      default:
        return state;
    }
}

export default formReducers;
  