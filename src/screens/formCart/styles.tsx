import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: 'white'
  },
  headerContainer: {
    padding: 30,
    borderBottomLeftRadius: 30
  },
  headerText: {
    fontWeight: "400", fontSize: 20, textAlign: 'justify', color: 'black', marginRight: 20
  },
  scrollViewContainer: {
    backgroundColor: 'white', 
    borderTopRightRadius: 30
  },
  optionsContainer: {
    marginTop: 40, 
    marginHorizontal: 20, 
    backgroundColor: 'transparent'
  },
  submitButtonContainer: {
    backgroundColor: 'white', 
    paddingBottom: 20
  },
  optionViewContainer: {
    marginVertical: 10, 
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center', 
    borderRadius: 10, 
    borderTopWidth: 10,
    borderColor: '#0F82A9',
    justifyContent: 'space-between',
    backgroundColor: '#dcf4fc'
  },
  optionViewPaddingContainer: {
    marginLeft: 40,
    backgroundColor: '#dcf4fc'
  },
  optionImageContainer: {
    width: 60, 
    height: 60
  },
  optionTextContainer: {
    fontSize: 23, 
    paddingLeft: 20, 
    textAlign: 'left', 
    fontWeight: 'bold', 
    color: '#010621'
  },
  subOptionTextContainer: {
    fontSize: 20, 
    paddingLeft: 20, 
    textAlign: 'left', 
    color: '#010621'
  },
  textViewPaddingContainer: {
    width: 200,
    flexShrink: 1,
    backgroundColor: '#dcf4fc'
  },
  orderText: {
    fontFamily: 'lobster', 
    fontSize: 80
  },
  editPaddingContainer: {
    paddingRight: 10,
    backgroundColor: '#dcf4fc',
    justifyContent: 'flex-end',
  },
  deletePaddingContainer: {
    paddingRight: 20,
    backgroundColor: '#dcf4fc',
    justifyContent: 'flex-end',
  },
  iconContainer: {
    width: 25, 
    height:25
  }
});
export { styles };