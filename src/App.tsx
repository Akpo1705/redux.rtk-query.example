import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreator';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
        // const { users, isLoading, error } = useAppSelector(state => state.userReducer)
        // const dispatch = useAppDispatch()

        // useEffect(() => {
        //         dispatch(fetchUsers());
        // }, [])
        return (
                <div className="App">

                        {/* {JSON.stringify(users, null, 2)} */}
                        <div style={{display:'flex'}}>
                        <PostContainer/>
                        {/* <PostContainer2/> */}
                        </div>

                </div>
        );
}

export default App;
