import { connect, ConnectedProps, useDispatch } from 'react-redux';

const mapState = ( state: any ) => {
    return {state};
};
  
const mapDispatch = {
    addItems: (formValue: Question) => ({ type: 'ADD_ITEMS', newItem: formValue })
}
  
const formConnector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof formConnector>
type FormReducersProps = PropsFromRedux & {}


export {
    FormReducersProps, 
    formConnector 
};
