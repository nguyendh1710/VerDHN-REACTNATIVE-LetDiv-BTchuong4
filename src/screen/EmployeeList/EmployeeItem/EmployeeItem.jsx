import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./EmployeeItem.style";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton ";
import { useDispatch, useSelector } from "react-redux";
import {
  resignEmployee,
  restoreEmployee,
} from "./../../../redux/employees/employees.slice";
export default function EmployeeItem({ dataItem }) {
  // Lấy danh sách nhân viên từ Redux
  const employeeList = useSelector((state) => state.employees.list);

  // Khởi tạo state với giá trị isResign từ dataItem
  const [isResign, setIsResign] = useState(dataItem.isResign);

  // Cập nhật isResign khi danh sách nhân viên thay đổi (tức là Redux cập nhật)
  useEffect(() => {
    const updatedEmployee = employeeList.find((emp) => emp.id === dataItem.id);
    if (updatedEmployee) {
      setIsResign(updatedEmployee.isResign);
    }
  }, [employeeList]);
  // console.log(dataItemAddIsResign);
  // lấy boolean isResign để đặt cờ
  // const isResign = dataItem.isResign

  // dùng navigation
  const navigation = useNavigation();
  // redux
  const dispatch = useDispatch();

  handleShowUpdate = () => {
    // điều hướng tro lại EmployeeList

    navigation.navigate("EmployeeUpdate", { dataItem });
  };
  // message
  const message = isResign ? "Khôi phục" : "Cho nghỉ";

  // hàm xac dinh
  const handleConfirm = (idEmployee) => {
    if (!isResign) {
      handleResign(idEmployee);
    } else {
      handleRestore();
    }
  };
  // ham cho nghi viec
  handleResign = (idOfEmployee) => {
    // console.log("Nhân viên cần cho nghỉ:", idOfEmployee);
    setIsResign(!isResign);
    const resignItem = { id: idOfEmployee };
    dispatch(resignEmployee(resignItem));
  };

  // hàm khôi phục
  handleRestore = () => {
    dispatch(restoreEmployee(dataItem));
    // setIsResign(false); // Cập nhật ngay để UI phản hồi nhanh
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          style={styles.avatar}
          resizeMode="cover"
          source={{ uri: `${dataItem.avatarUri}` }}
          accessibilityLabel="Avatar"
        />

        <View style={styles.info}>
          <Text style={styles.name} onPress={handleShowUpdate}>
            {dataItem.name}
          </Text>

          <Text style={styles.role}>{dataItem.role}</Text>
        </View>
        <Image
          style={styles.inboxIcon}
          resizeMode="cover"
          source={{
            uri: "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/inbox.png?raw=true",
          }}
          accessibilityLabel="Inbox icon"
        />
      </View>

      <View  style={styles.boxBtn}>

        <PrimaryButton onPress={() => handleConfirm(dataItem.id)}>
          {message}
        </PrimaryButton>
        <PrimaryButton onPress={handleShowUpdate}>Cập nhật</PrimaryButton>
      </View>
    </View>
  );
}
