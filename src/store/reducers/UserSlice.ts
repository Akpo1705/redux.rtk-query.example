import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";
import { fetchUsers } from "./ActionCreator";

interface UserState{
       users: IUser[]; 
       isLoading: boolean;
       error: string;
       count: number;
}

const initialState: UserState = {
        users: [],
        isLoading: false,
        error: '',
        count: 0
}

export const userSlice = createSlice({
        name: 'user',
        initialState: initialState,
        reducers:{
                // usersFetching(state){
                //         state.isLoading = false;
                // },
                // usersFetchinSuccsess(state, action: PayloadAction<IUser[]>){
                //         state.isLoading = true;
                //         state.error = '';
                //         state.users = action.payload;
                // },
                // usersFetchinError(state, action: PayloadAction<string>){
                //         state.isLoading = false;
                //         state.error = action.payload;
                // }
        },
        extraReducers:{
                [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>)=>{
                        state.isLoading = false;
                        state.error = '';
                        state.users = action.payload;
                },
                [fetchUsers.pending.type]: (state)=>{
                        state.isLoading = true;
                },
                [fetchUsers.rejected.type]: (state, action: PayloadAction<string>)=>{
                        state.isLoading = false;
                        state.error = action.payload;
                }
        }
})


export default userSlice.reducer;