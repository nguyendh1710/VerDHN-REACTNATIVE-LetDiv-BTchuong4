import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { styles } from "./EmployeeUpdate.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import Input from "../../components/Input/Input";
import { useNavigation } from "@react-navigation/native";
// import { AppContext } from "./../../AppContext";
import { useSelector,useDispatch } from "react-redux";
import { updateEmployee } from './../../redux/employees/employees.slice';


export default function EmployeeUpdate({ route }) {
  // dùng navigation
  const navigation = useNavigation();
// redux
  const dispatch = useDispatch();

  // nhận dữ kiệu từ route params
  const { dataItem } = route.params;

  // gọi state để quản lý thay đổi của input và gắn giá trị mặ định cho state là lấy vè từ context
  const [textEmployeeName, setTextEmployeeName] = useState(dataItem.name);
  const [textEmployeePosition, setTextEmployeePosition] = useState(
    dataItem.role
  );
  const [textEmployeeAvatarUri, setTextEmployeeAvatarUri] = useState(
    dataItem.avatarUri
  );

  const handleSaveUpdate = () => {
    // tạo một object để chứa đối tượng mới tạo
    const employeeNeedUpdate = {
      id: dataItem.id,
      name: textEmployeeName,
      role: textEmployeePosition,
      avatarUri: textEmployeeAvatarUri,
    };
      // dùng redux  dispatch nhân viên lên reduccer
      dispatch(updateEmployee(employeeNeedUpdate));

    // trở lại EmployeeList
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sửa nhân viên </Text>
      <Input
        style={styles.inputContainer}
        placeholder="Họ và tên"
        value={textEmployeeName}
        onChangeText={(e) => setTextEmployeeName(e)}
      />
      <Input
        style={styles.inputContainer}
        placeholder="Chức vị"
        value={textEmployeePosition}
        onChangeText={(e) => setTextEmployeePosition(e)}
      />
      <Input
        style={styles.inputContainer}
        placeholder="Avatar"
        value={textEmployeeAvatarUri}
        onChangeText={(e) => setTextEmployeeAvatarUri(e)}
      />
      <View style={styles.buttonPosition}>
        <PrimaryButton onPress={handleSaveUpdate}>Lưu</PrimaryButton>
      </View>
    </View>
  );
}
