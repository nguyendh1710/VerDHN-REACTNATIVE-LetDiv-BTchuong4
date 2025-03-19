import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center" },
  image: { width: 200, height: 200, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  price: { fontSize: 20, color: "green", marginBottom: 10 },
  description: { fontSize: 16, textAlign: "center", color: "gray" },
  button: {
    position: "absolute",
    top: 50, // Di chuyển nút xuống 50 đơn vị từ trên cùng
    left: 150,
    padding: 8,
    color: "white",
    paddingLeft: 10,
  },
});
