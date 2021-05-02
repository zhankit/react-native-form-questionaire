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
        return { forms: [1] }
      default:
        return state;
    }
}

export default formReducers;
  