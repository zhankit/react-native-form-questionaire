import { Question } from "../../interfaces/interfaces";

const initialUserState = {
    forms: []
}

const formReducers = (state = initialUserState, action: any) => {
    switch (action.type) {
      case 'ADD_ITEMS':
        return { 
            ...state,
            forms: [...state.forms, action.newItem]
         }
      case 'REMOVE_ITEMS':
        return { 
          ...state,
          forms: state.forms.filter( (items: Question) => items.id != action.payload) 
        }
      default:
        return state;
    }
}

export default formReducers;
  