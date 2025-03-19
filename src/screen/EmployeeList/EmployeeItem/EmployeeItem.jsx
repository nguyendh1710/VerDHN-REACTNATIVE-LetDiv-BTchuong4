import React from 'react';
import { View,Image, Text } from 'react-native';
import {styles} from './EmployeeItem.style'
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton ';
import { useDispatch } from "react-redux";
import { resignEmployee,restoreEmployee } from './../../../redux/employees/employees.slice';
export default function EmployeeItem({dataItem}) {

  // lấy boolean isResign để đặt cờ
  const isResign = dataItem.isResign
  // console.log(dataItem)
  // dùng navigation
  const navigation = useNavigation();
  // redux
    const dispatch = useDispatch();

  handleShowUpdate =()=>{
    

 // điều hướng tro lại EmployeeList

 navigation.navigate("EmployeeUpdate", { dataItem });

  }
  // message
  const message = isResign ? 'Khôi phục':'Cho nghỉ' ;
  
  // hàm xac dinh
  const handleConfirm = (isResign) =>{

    if(isResign)
    {
      
      handleResign();
    }
    else
    {
      handleRestore();
      
    }
  }
  // ham cho nghi viec
  handleResign =()=>{
    // console.log('eee')
    // console.log(dataItem)
    const resignItem = {id:dataItem.id,isResign:true}
    dispatch(resignEmployee(resignItem));
     }
     // hàm khôi phục
  handleRestore =()=>{
   
    dispatch(restoreEmployee(dataItem));
     
    }

  return (
   
    <View style={styles.card}>

      <View style={styles.cardContent}>
        <Image
          style={styles.avatar}
          resizeMode="cover"
          source={{ uri: `${dataItem.avatarUri}`  }}
          accessibilityLabel="Avatar"
        />
     
        <View style={styles.info}>
          <Text style={styles.name} onPress={handleShowUpdate}>{dataItem.name}</Text>
         
          <Text style={styles.role}>{dataItem.role}</Text>
        </View>
        <Image
        style={styles.inboxIcon}
        resizeMode="cover"
        source={{ uri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/inbox.png?raw=true'  }}
        accessibilityLabel="Inbox icon"
      />
      </View>
     
  
     <PrimaryButton onPress={handleConfirm}>{message}</PrimaryButton>
       
    </View>
  

  );
}


