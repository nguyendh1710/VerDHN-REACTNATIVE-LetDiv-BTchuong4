import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
   flex:1,
    position:'relative',
    paddingTop: 24,

  },
  content: {
    flex:1, // phai cho content flex:1 de no chiem het khong gian neu khong se day cac thanh phan khac xuong duoi nhu floatbutton
    width: "100%",
    paddingLeft: 23,
    paddingRight: 23,
    flexDirection: "column",
    alignItems: "stretch",
  },
 
  title: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign:"center",
    color:"orange",
  },
  searchContainer: {
   
    marginTop: 18,
    marginLeft: 25,
    justifyContent: "start",
    fontSize: 18,
    color: "rgba(206, 212, 218, 1)",
    fontWeight: "400",
  },
  searchBox: {
    borderRadius: 29,
    borderColor: "rgba(134, 142, 150, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    width: 290,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginBottom: 19,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    fontSize: 18,
    color: "rgba(73, 80, 87, 1)",
    paddingTop: 0,

  },
  searchIcon: {
    
    height: 30,
 
  },
 
  divider: {
    borderRadius: 19,
    marginTop: 5,
    aspectRatio: 3.02,
  },

});
