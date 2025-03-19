import { createSlice } from "@reduxjs/toolkit";


const INIT_STATE = {
    list: [
        {
          "id": 0,
          "name": "Trần Anh Dũng",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 1,
          "name": "Trần Mai Lan",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 2,
          "name": "Trần Minh Tuấn",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 3,
          "name": "Trần Ngọc Hân",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 4,
          "name": "Trần Hoàng Nam",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 5,
          "name": "Trần Thị Lan",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 6,
          "name": "Trần Quang Huy",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 7,
          "name": "Trần Thảo Vy",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 8,
          "name": "Trần Bảo Minh",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 9,
          "name": "Trần Văn Tèo",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
        {
          "id": 10,
          "name": "Trần Văn Tâm",
          "role": "Developer",
          "avatarUri":
            "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
        },
      ],
    resignList:[]
}


const employeesSlice = createSlice({
    name: 'employees',
    initialState: INIT_STATE,
    reducers:{
        addEmployee: (state, action) => { 
            action.payload.id=state.list.length + 1;
            state.list.push(action.payload); 
           
        },
        updateEmployee: (state, action) => { 
            const indexOfEmployeeIdNeedUpdate = state.list.findIndex(item => item.id === action.payload.id); 
            if (indexOfEmployeeIdNeedUpdate !== -1) 
                { state.list[indexOfEmployeeIdNeedUpdate] = action.payload; } 
          },
       resignEmployee:(state, action) => { 
        
        const indexOfEmployeeIdNeedResign = state.list.findIndex(item => item.id === action.payload.id); 
        state.list[indexOfEmployeeIdNeedResign].isResign = action.payload.isResign
        // console.log( action.payload.isResign)
        
        if (indexOfEmployeeIdNeedResign !== -1) 
            { 
              state.resignList.push(state.list[indexOfEmployeeIdNeedResign]);
              state.list.splice(indexOfEmployeeIdNeedResign, 1);
             } 
      },
      restoreEmployee:(state, action) => { 
        // Xóa key "isRsign" delete payload;
        // console.log(action.payload)
        delete action.payload.isResign;
        state.list.push(action.payload);

        const indexOfEmployeeIdNeedRestore = state.resignList.findIndex(item => item.id === action.payload.id);
        if (indexOfEmployeeIdNeedRestore !== -1) 
          { 
            state.resignList.splice(indexOfEmployeeIdNeedRestore, 1)

           } 
       
      },
    }, 
        
})
// console.log('Initial State:', productsSlice.getInitialState()); // Kiểm tra giá trị của initialState
export const { addEmployee, updateEmployee,resignEmployee,restoreEmployee} = employeesSlice.actions;
export default employeesSlice.reducer;


