import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//         try{
//                 dispatch(userSlice.actions.usersFetchinError);
//                 const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//                 dispatch(userSlice.actions.usersFetchinSuccsess(responce.data));
//         }
//         catch(e)
//         {
//                 dispatch(userSlice.actions.usersFetchinError((e as Error).message));
//         }
// }


export const fetchUsers = createAsyncThunk(
        'user/fetchAll',
        async(_,thunkAPI)=>{
                try {
                        const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
                        return responce.data;                        
                } catch (error) {
                        return thunkAPI.rejectWithValue('Не удалось подгрузить пользователей')
                }
        }

)