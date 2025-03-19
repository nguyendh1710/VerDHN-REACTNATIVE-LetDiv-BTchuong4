import {instance} from './../../helpers/api'
import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk để lấy danh sách sản phẩm để hiển thị trong Product List
export const fetchProductsThunk = createAsyncThunk  (
  'products/fetchProductsThunk',
    async (_, { rejectWithValue }) => {
        // gửi dữ liệu mới lấy đến redux
        const response = await instance.get("/products");
        const {products} = response.data;
        console.log("Fetched products:", products); // Kiểm tra dữ liệu
        return products;
    }
          
  );

// Thunk để search sản phẩm trong product list
export const fetchSearchProductsThunk = createAsyncThunk  (
'products/fetchSearchProductsThunk',
  async (search = '') => {
      // gửi dữ liệu mới lấy đến redux
      const response = await instance.get("/products",{params:{search}});
      const {products} = response.data;
      return products;
  }
        
);

// Thunk mới: Lấy chi tiết sản phẩm theo ID
export const fetchProductDetailThunk = createAsyncThunk(
  'products/fetchProductDetail',
  async (productId) => {
    const response = await instance.get(
      `/products/${productId}`
    );
    return response.data;
  }
);
// Cập nhật sản phẩm theo ID
export const fetchPatchProductThunk = createAsyncThunk(
  "products/fetchPatchProduct",
  
  async ({ productId, updatedData }, { rejectWithValue }) => {
  
    try {
      const response = await instance.patch(`/products/${productId}`, updatedData); //  Gửi updatedData vào body
      console.log("Đã gửi request update đến backend thành công:", response.data);
    
      return response.data;
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data);
    }
  }
);

    


  