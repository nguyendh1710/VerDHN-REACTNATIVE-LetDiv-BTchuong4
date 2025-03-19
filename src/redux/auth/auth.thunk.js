import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { instance } from "../../helpers/api";

export const loginThunk = createAsyncThunk("auth/loginThunk", async (data,{rejectWithValue}) => {
  try {
    const response = await instance.post("./auth/dang-nhap", {
      username: data.username,
      password: data.password,
    });

    const {
      data: { token },
    } = response.data;
    return token;
    // const token =  data.data.token;
  } catch (error) {

    //Xử lý lỗi từ axios (status ko phaair là 2xx)
    if (error.response) {
      if (error.response.status === 401) {
        return rejectWithValue("Đăng nhập thất bại");
      } else {
        return rejectWithValue("Lỗi từ máy chủ");
      }
    } else {
      return rejectWithValue("Lỗi mạng. Không thể kết nối đến máy chủ");
    }
  }
});
