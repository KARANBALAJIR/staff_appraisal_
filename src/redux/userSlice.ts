import { createSlice } from "@reduxjs/toolkit";

// interface InitialState {
//     name: string,
//     email: string,
//     role: string,
//     designation: string,
//     department: string,
//     phoneNo: string,
//     gender: string,
//     status: string,
//     isFirst: boolean
// }

const initialState = {
    userDetails : {
        name: "",
        email: "",
        role: "",
        designation: "",
        department: "",
        phoneNo: "",
        gender: "",
        status: "",
        isFirst: true
    }
};

const userSlice =  createSlice({
    name: "userSlice",
    initialState,
    reducers:{
        updateUserDetails: (state, action) =>{
            return{
                ...state,
                userDetails: action.payload
            }
        }
    }
})

export const {updateUserDetails} = userSlice.actions
export default userSlice.reducer