import React, { useState,useEffect} from "react";
import {   View,
  Image,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity, } from 'react-native';
import EmployeeItem from "./../../screen/EmployeeList/EmployeeItem/EmployeeItem";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./EmployeeResignation.style";
import { useSelector } from "react-redux";

export default function EmployeeResignation() {
// cu phap dang theo doi employees
  const resignList = useSelector(state=>state.employees.resignList);
  // console.log( resignList)
 
    const [filteredDataResign, setFilteredDataResign] = useState(resignList); 
 
    // chú ý dùng useEffect để nó thay đổi khi component khởi tạo
    useEffect(() => {
      setFilteredDataResign(resignList)
     
    }, [resignList])
    const handleSearch = (query) => {
        const results = resignList.filter((item) =>
          //toLowerCase dùng cho string
          item.name.toLowerCase().includes(query.toLowerCase()) || 
          item.role.toLowerCase().includes(query.toLowerCase()) 
        );
        console.log(results);
        setFilteredDataResign(results);
    };
  return (

      <View style={styles.listContainer}>
        <View>
          <Text style={styles.title}>Nhân Viên Nghỉ Việc</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <TouchableOpacity>
              <Ionicons
                style={styles.searchIcon}
                name="search"
                size={32}
                color="gray"
              />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm nhân viên"
              placeholderTextColor="rgba(206, 212, 218, 1)"
              accessibilityLabel="Tìm kiếm nhân viên"
              // không cần kiểm soát value -> uncontrol component
              // value={searchQuery}
              onChangeText={(text)=>handleSearch(text)}
            />
          </View>
        </View>
          <FlatList
            data={filteredDataResign}
            renderItem={({ item }) => <EmployeeItem dataItem={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
   
  );
}
