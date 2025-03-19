import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    left:230,
    bottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10, // Dành cho Android
    borderRadius: 30,
    position:"relative"
  },
  gradient: {
    width: 50,
    height: 50,
    padding: 20,
    alignItems: "center",
    borderRadius: 25,
  },
  icon:{
     position:"absolute",
    left:'40'
  }
});

