import { Question } from "../../interfaces/interfaces";

const initialUserState = {
    forms: [],
    size: 0,
    joke: {},
    loading: false
}



const formReducers = (state = initialUserState, action: any) => {
    switch (action.type) {
      case 'ADD_ITEMS':
        return { 
            ...state,
            forms: [...state.forms, action.newItem],
            size: state.size + 1
         }
        case 'EDIT_ITEMS':
          console.log('action.newItem', action.newItem);
          return { 
              ...state,
              forms: state.forms.map( (item: Question) => {
                if (action.newItem.id === item.id) {return { ...action.newItem }}
                else { return {...item}}
              }),
              size: state.size
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
      case 'FORMS_LENGTH':
        return state.forms.length
      case 'GET_JOKES':
          console.log('loading?');
          return { ...state, loading: true };
      case 'JOKE_RECEIVED':
          return { ...state, joke: action.json, loading: false }
      default:
        return state;
    }
}

export default formReducers;
  