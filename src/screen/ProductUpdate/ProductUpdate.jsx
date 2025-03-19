import React, { useState, useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./ProductUpdate.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
// import { AppContext } from './../../AppContext';
import { updateProduct } from "./../../redux/products/products.slice";
import { fetchPatchProductThunk } from "../../redux/products/products.thunk";

export default function ProductUpdate({ route }) {
  // dùng context
  // const {list} = useContext(AppContext)
  // dùng redux
  const dispatch = useDispatch();

  // lấy thông tin sản phẩm cần update
  const { dataItem } = route.params;
  // console.log(dataItem)
  const navigation = useNavigation();

  const [textProductName, setTextProductName] = useState(dataItem.name);
  const [textProductPrice, setTextProductPrice] = useState(dataItem.price);
  const [textProductImage, setTextProductImage] = useState(dataItem.image);

  const handleChangeProductName = (input) => {
    setTextProductName(input);
  };

  const handleChangeProductPrice = (input) => {
    setTextProductPrice(input);
  };

  const handleChangeProductImage = (input) => {
    setTextProductImage(input);
  };
  // const handleUpdateProduct = () => {
  //   // tạo một object để chứa đối tượng mới tạo => nhớ lấy key giống mảng copyData thì thì mới map key vào bên ProductList ở hàm updateProducttoCopyData được
  //   const productneedUpdate = {
  //       id: dataItem.id,
  //       name: textProductName,
  //       price: textProductPrice,
  //       image: textProductImage,
  //   };
  // Hàm cập nhật sản phẩm với thunk khi nhấn nút
  const handleUpdateProduct= async () => {
    
    try{

      await dispatch(
        fetchPatchProductThunk({
          productId: dataItem.id,
          updatedData: { name: textProductName, price:textProductPrice, image: textProductImage}, // Thay bằng dữ liệu thực tế
        })).unwrap()
    } catch(error) {
      console.log("lôi cập nhật",error)
    }
   
    // ).then((result) => {
    //   if (fetchPatchProductThunk.fulfilled.match(result)) {
    //     Alert.alert("Thành công", "Cập nhật sản phẩm thành công!");
    //   } else {
    //     Alert.alert("Lỗi", "Cập nhật thất bại, vui lòng thử lại!");
    //   }
    // });
    navigation.goBack();
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}> Update sản phẩm </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên sản phẩm ở đây"
        value={textProductName}
        onChangeText={(e) => handleChangeProductName(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập giá sản phẩm ở đây"
        keyboardType="numeric"
        value={textProductPrice}
        onChangeText={(e) => handleChangeProductPrice(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập ảnh sản phẩm ở đây"
        value={textProductImage}
        onChangeText={(e) => handleChangeProductImage(e)}
      />
      <PrimaryButton
        style={styles.button}
        onPress={handleUpdateProduct}
      >
        Lưu
      </PrimaryButton>
    </View>
  );
}
