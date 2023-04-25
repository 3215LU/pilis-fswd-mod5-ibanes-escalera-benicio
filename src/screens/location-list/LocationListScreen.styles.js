import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

<<<<<<< HEAD
=======

>>>>>>> 1cc4c0e0fb142989bc6bb2aa02462a69e372baf8
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.grey
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20, // Fixed value --- magic number
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  itemList: {
    padding: 10
  },
  itemImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover'
  },
  itemTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10
  },
  itemPrice: {
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 10
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  rating: {
    marginLeft: 4,
    color: COLORS.text,
    fontSize: FONT_SIZE.md
  }
})