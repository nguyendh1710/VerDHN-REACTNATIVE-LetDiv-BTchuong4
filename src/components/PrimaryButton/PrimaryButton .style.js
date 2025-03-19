import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 30,
  
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10, // Dành cho Android
    borderRadius: 20,
    bottom: 20,
    left: 40,
  },
  gradient: {
   
    width: 100,
    height: 30,
   
    padding: 15,
    alignItems: "center",
    borderRadius: 25,
    ...StyleSheet.absoluteFillObject, // Đảm bảo chữ hiển thị trên gradient
  },
  buttonText: {
    zIndex:9,
    position: "absolute",
    bottom:-3,
    paddingVertical:10,
    zIndex: 1, // Đảm bảo chữ hiển thị trên gradient
    color: "#ffff",
    fontWeight: "700",
    fontSize: 20,
  },
});
