import React, { useState,useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./EmployeeAdd.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import Input from '../../components/Input/Input';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { addEmployee } from './../../redux/employees/employees.slice';

export default function EmployeeAdd() {
// điều hướng
  const navigation = useNavigation();
// redux

  const dispatch = useDispatch();


// cac state
  const [textEmployeeName, setTextEmployeeName] = useState("");
  const [textEmployeePosition, setTextEmployeePosition] = useState("");
  const [textEmployeeAvatarUri, setTextEmployeeAvatarUri] = useState("");
// cac ham tuong tac khi input thay doi
  const handleChangeEmployeeName = (input) => {
    setTextEmployeeName(input);
  };

  const handleChangeEmployeePosition = (input) => {
    setTextEmployeePosition(input);
  };

  const handleChangeEmployeeAvatarUri = (input) => {
    setTextEmployeeAvatarUri(input);
  };

  const handleAddEmployee = () => {
  // tạo một object để chứa đối tượng mới tạo -> nho de key khop voi mang goc state
    const employeeNeedAdded = {
  
      name: textEmployeeName,
      role: textEmployeePosition,
      avatarUri: textEmployeeAvatarUri 
    };
    if(employeeNeedAdded.name.trim() !== "" &&
    employeeNeedAdded.role.trim() !== "" &&
    employeeNeedAdded.avatarUri?.trim() !== "" ) {
      dispatch(addEmployee(employeeNeedAdded));
      // điều hướng tro lại EmployeeList
         navigation.goBack()
    }else{
      alert("Vui lòng điền đầy đủ thông tin")
    }
   

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Thêm nhân viên </Text>
      <Input
        style={styles.inputContainer}
        placeholder="Họ và tên"
        value={textEmployeeName}
        onChangeText={(e) => handleChangeEmployeeName(e)}
      />
      <Input
        style={styles.inputContainer}
        placeholder="Chức vụ"
        value={textEmployeePosition}
        onChangeText={(e) => handleChangeEmployeePosition(e)}
      />
           <Input
        style={styles.inputContainer}
        placeholder="Ảnh avatar"
        value={textEmployeeAvatarUri}
        onChangeText={(e) => handleChangeEmployeeAvatarUri(e)}
      />
     <View style={styles.buttonPosition}>
     <PrimaryButton  onPress={handleAddEmployee}  >
        Lưu
      </PrimaryButton>
     </View>
     
    </View>
  );
}
