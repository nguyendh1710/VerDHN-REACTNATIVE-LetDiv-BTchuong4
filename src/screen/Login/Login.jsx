import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput,ScrollView,TouchableOpacity} from "react-native";
import styles from "./Login.style";
import { loginThunk } from '../../redux/auth/auth.thunk';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập username..."
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Nhập password..."
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <TouchableOpacity
        style={styles.saveButton}
        onPress={async () => {
          if (username === '' && password === '') {
            alert("Không đc bỏ trống");
          } else {
            try {
              await dispatch(loginThunk({
                username,
                password,
              })).unwrap(); // throw Exception
            } catch (error) {
              alert(error);
            }
          }
        }}
      >
        <Text style={styles.saveButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Login;