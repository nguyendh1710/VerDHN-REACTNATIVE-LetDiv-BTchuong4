import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position:'relative',
    flex: 1,
    width:600,
    height:900,
    // marginBottom: -40,
    marginTop: 40,
    marginHorizontal: 30,
    // marginVertical:80,
    // backgroundColor:'#ffff',
    gap: 8,
  },

  title:{
    textAlign:"justify",
     fontSize: 24,
     fontWeight: '700',
     marginHorizontal:-10,
     marginBottom:40,
     justifyContent: 'center',
     color:"orange"
    //  position:'absolute',

  },
  inputContainer:{
    marginBottom:10,
 },
 buttonPosition:{
  paddingTop:40,
  
  marginHorizontal:50,
},
});
