import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./ProductDetail.style";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetailThunk } from "../../redux/products/products.thunk";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton ";

export default function ProductDetail() {

  const navigation = useNavigation();

  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetailThunk()); // Fetch danh sách sản phẩm khi component mount
  }, []);

  return (
    <View>
   
      <View style={styles.container}>
        <Image source={{ uri: selectedProduct.image }} style={styles.image} />
        <Text style={styles.title}>{selectedProduct.name}</Text>
        <Text style={styles.price}>${selectedProduct.price}</Text>
      </View>
      <PrimaryButton style={styles.button} onPress={ navigation.goBack()}>
         Trở lại
      </PrimaryButton>
    </View>
  );
}
