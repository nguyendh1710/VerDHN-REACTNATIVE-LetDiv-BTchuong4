import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { fetchProductsThunk, fetchSearchProductsThunk,fetchProductDetailThunk,fetchPatchProductThunk } from "./products.thunk";

const INIT_STATE = {
  list: [],
  loading: true,
  selectedProduct: null, //  Thêm state để lưu sản phẩm được chọn
};

const productsSlice = createSlice({
  name: "products",
  initialState: INIT_STATE,
  // reducers nhận dũ liêu từ component
  reducers: {
    addProduct: (state, action) => {
      action.payload.id = state.list.length + 1;
      state.list.push(action.payload);
    },
    updateProduct: (state, action) => {
      const indexOfProductIdNeedUpdate = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfProductIdNeedUpdate !== -1) {
        state.list[indexOfProductIdNeedUpdate] = action.payload;
      }
    },
  },
  // lấy dữ liệu từ api về
  // extraReducers nhận dũ liêu về từ thunk với extraReducers ==> lắng nghe thunk đang ở giai đoạn nào
  extraReducers: (builder) => {
    builder
      //---------- Xử lý fetchProducts để lấy danh sách sản phẩm

      //callback được gọi khi thunks chạy xong
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.list = action.payload;
        console.log("Thunk fulfilled, updating state...");
        state.loading = false;
      })
      // trường hợp khi loading lại
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      //---------- Xử lý fetchSearchProductsThunk để search thông tin sản phẩm trong product list
      .addCase(fetchSearchProductsThunk.pending, (state) => {
        state.loading = true;
      })
      //callback được gọi khi thunks chạy xong
      .addCase(fetchSearchProductsThunk.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchSearchProductsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      //  Xử lý fetchProductDetailThunk
      .addCase(fetchProductDetailThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetailThunk.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductDetailThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
       //  Xử lý fetchPatchProductThunk
       .addCase(fetchPatchProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPatchProductThunk.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchPatchProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      ;
      
  },
});
// console.log('Initial State:', productsSlice.getInitialState()); // Kiểm tra giá trị của initialState
export const { addProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
