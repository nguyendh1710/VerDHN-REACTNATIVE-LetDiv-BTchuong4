
import { StyleSheet} from 'react-native';



export const styles = StyleSheet.create({

  card: {
    position:' absolute',
    borderRadius: 29,
   flexDirection:"column",
    marginTop: 18,
    paddingLeft: 21,
    paddingRight: 31,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: "stretch",
    gap: 20,
    justifyContent: "space-between",
    
    height:120,
    width: 300,
    backgroundColor:'rgba(134, 142, 150, 1)'
  },
  cardContent: {

    alignItems: "center",
    gap: 20,
    flexDirection: "row",
    height:70,
  },
  avatar: {
    position: "relative",
    display: "flex",
    width: 65,
    height: 95,
    aspectRatio: 1,
    borderRadius: 50,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  name: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 20,
    fontWeight: "500",
    width: 120,
    alignItems: 'flex-start',
  },
  role: {
    color: "rgba(134, 142, 150, 1)",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 5,
  },
  inboxIcon: {
    // position: "relative",
    // display: "flex",
    width: 36,
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    aspectRatio: 1.3,
    alignSelf: "stretch",
  },
  boxBtn: {
    
    flexDirection:"row",
    justifyContent: "center",
    alignItems:"center",
    gap: 4,
  }

});
