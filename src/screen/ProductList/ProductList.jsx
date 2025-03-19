import React, { useContext, useEffect } from "react";
import { View, FlatList,Text,TouchableOpacity,TextInput } from "react-native";
import Item from "./ProductItem/ProductItem";
import { styles } from "./ProductList.style";
import FloatButton from "../../components/FloatButton/FloatButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch } from "react-redux";
import {fetchProductsThunk,fetchSearchProductsThunk} from "../../redux/products/products.thunk"
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProductList({ route }) {
   
  const navigation = useNavigation();
  // dùng redux CHÚ Ý PHẢI LẤY ĐÚNG DỮ LIỆU BẰNG USESELECTOR KHÔNG BỊ CRASH
  // chu y do khi nao co list thi . den dung list
  // const products = useSelector(state=>state.products.list);
  //Nếu store chưa có dữ liệu (do chưa gọi API), thì nó sẽ trả về mảng rỗng. ==> useSelector chỉ lấy dữ liệu đã có, không tự động gọi API.

  const {list,loading} = useSelector(state=>state.products);

  // Cần dùng useEffect để gọi dispatch(fetchProducts()) để lấy dữ liệu mới nhât từ api vê store redux khi component mount.
 const dispatch = useDispatch();
  useEffect (()=>{
    dispatch(fetchProductsThunk());  // Fetch danh sách sản phẩm khi component mount
  },[dispatch]);
  // ham search
  const handleSearch = (query) => {
  
    dispatch(fetchSearchProductsThunk(query)); // Fetch danh sách sản phẩm khi component mount
};

  // console.log(list)

  // lấy lại updatedProduct mới từ navigation -> kiểm tra route.params co tồn tại đê không báo lỗi undefine
  // if (route.params) {
  //   const { updatedProduct, dataItem } = route.params;
    
  //   if (updatedProduct) {
  //     const indexOfProductIdNeedUpdate = list.findIndex(
  //       (item) => item.id === updatedProduct.id
  //     );
    
  //   }

  //   if (dataItem) {
  //     const indexOfProductIdNeedDelete = list.findIndex(
  //       (item) => item.id === dataItem.id
  //     );
  //     if (indexOfProductIdNeedDelete !== -1) {
  //       list.splice(indexOfProductIdNeedDelete, 1);
  //     }
  //   }

  //   console.log("Updated Product:", updatedProduct);
  //   console.log("Data Item:", dataItem);
  // } else {
  //   console.log("chưa nhận updated/delete Product");
  // }

  //
  const handleAddProduct = () => {
    // setModalVisible(!modalVisible);
    // dieu huong de ProductAdd
    navigation.navigate("ProductAdd");
  };

  return (
    <View>
      {loading && <Text>dang load</Text>}
      <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <TouchableOpacity>
              <Icon
                style={styles.searchIcon}
                name="search"
                size={32}
                color="gray"
              />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm sản phẩm"
              placeholderTextColor="rgba(206, 212, 218, 1)"
              accessibilityLabel="Tìm kiếm sản phẩm"
              // không cần kiểm soát value -> uncontrol component
              // value={searchQuery}
              onChangeText={(text)=>handleSearch(text)}
            />
          </View>
        </View>


      <FlatList
        style={styles.container}
        data={list}
        renderItem={({ item }) => <Item dataItem={item} />}
        keyExtractor={(item) => item.id}
      />
      {/* FloatButton */}

      <FloatButton onPress={handleAddProduct} />
    </View>
  );
}
