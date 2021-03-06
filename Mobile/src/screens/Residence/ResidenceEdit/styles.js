import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerImgView: {
    marginBottom: 5,
  },
  titleWithEditOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyView: {
    backgroundColor: '#F9F8FD',

    marginBottom: 25,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  basicInfoView: {
    alignItems: 'flex-start',
    marginLeft: 25,

    marginBottom: 10,
  },
  mainTitle: {
    color: '#3F3F3F',
    fontSize: 36,
    marginBottom: 10,

    alignSelf: 'flex-end',
    marginTop: 5,
  },
  location: {
    color: '#8D8D97',
    fontSize: 22,
    marginBottom: 15,
  },
  availableText: {
    color: '#26E07C',

    fontWeight: 'bold',

    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  unavailableText: {
    color: '#E03826',

    fontWeight: 'bold',

    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  price: {
    color: '#3F3F3F',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ownerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicView: {
    borderRadius: 100,
    width: 95,
    height: 95,

    marginBottom: 5,
  },
  profilePic: {
    width: 95,
    height: 95,

    flex: 1,
    alignSelf: 'center',
    borderRadius: 100,
  },
  buttonPic: {
    flex: 1,
  },
  name: {
    color: '#3F3F3F',
    fontSize: 25,
    marginBottom: 10,
  },
  subTitle: {
    color: '#8D8D97',
    fontSize: 18,
    marginBottom: 15,
  },
  descriptionView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  comfortView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  locationView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title1: {
    color: '#3F3F3F',
    fontSize: 30,

    marginBottom: 10,
    marginLeft: 5,
    top: 5,
  },
  description: {
    color: '#3F3F3F',
    fontSize: 20,
    marginBottom: 15,
    marginHorizontal: 25,
    alignSelf: 'flex-start',
  },
  descriptionList: {
    color: '#3F3F3F',
    fontSize: 18,
    marginBottom: 15,

    marginLeft: 5,

    top: 5,
  },
  titleWithIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 25,
  },
  editButton: {
    alignSelf: 'center',
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 25,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,

    borderRadius: 8,

    paddingVertical: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,

    fontWeight: 'bold',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#26E07C',
    fontSize: 50,
  },
});

export default styles;
