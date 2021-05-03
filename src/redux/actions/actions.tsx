import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Question } from '../../interfaces/interfaces';

const mapState = ( state: any ) => {
    return {state};
};
  

const mapDispatch = {
    addItems: (formValue: Question) => ({ type: 'ADD_ITEMS', newItem: formValue }),
    removeItems: (index: String) => ({ type: 'REMOVE_ITEMS', payload: index }),
    submitForms: (formValue: Question) => ({ type: 'UPDATE_FORMS', newForm: formValue }),
    formLength: () => ({ type: 'FORMS_LENGTH' }),
}
  
const formConnector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof formConnector>
type FormReducersProps = PropsFromRedux & {}


export {
    FormReducersProps, 
    formConnector 
};
