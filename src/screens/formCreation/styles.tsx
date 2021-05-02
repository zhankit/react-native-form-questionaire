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
    borderBottomRightRadius: 30
  },
  headerText: {
    fontWeight: "400", fontSize: 20, textAlign: 'justify', color: 'black', marginRight: 20
  },
  scrollViewContainer: {
    backgroundColor: 'white', 
    borderTopLeftRadius: 30
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
    height: 100,
    flex: 1,
    justifyContent: 'flex-start', 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderRadius: 20, 
    backgroundColor: '#dcf4fc'
  },
  optionViewPaddingContainer: {
    paddingLeft: 40
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
  }
});
export { styles };