import { Question } from "../../interfaces/interfaces";

const initialUserState = {
    forms: [],
    size: 0
}

const formReducers = (state = initialUserState, action: any) => {
    switch (action.type) {
      case 'ADD_ITEMS':
        return { 
            ...state,
            forms: [...state.forms, action.newItem],
            size: state.size + 1
         }
      case 'REMOVE_ITEMS':
        // TODO: Check efficiently or better way
        return { 
          ...state,
          forms: state.forms.sort((a: Question, b: Question) => a.order - b.order)
            .filter( (item: Question) => item.id != action.payload)
            .map( (item: Question, index) => { return { ...item , order: index + 1}}),
          size: state.size - 1 
        }
      case 'UPDATE_FORMS':
        return {
          ...state,
          forms: action.newForm
        }
      default:
        return state;
    }
}

export default formReducers;
  