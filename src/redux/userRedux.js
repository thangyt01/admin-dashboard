import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:{
        users: [],
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart: (state)=>{
            state.isFetching = true
        },
        loginSuccess: (state, action)=>{
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure: (state)=>{
            state.isFetching = false
            state.error = true
        },
        logoutUser: (state)=>{
            state.isFetching = false
            state.currentUser = null
            state.error = false
        },
        //GET USER
        getUserStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        getUserSuccess: (state, action)=>{
            state.isFetching = false
            state.error = false
            state.users = action.payload
        },
        getUserFailure: (state, action)=>{
            state.isFetching = false
            state.error = true
        },
        //DELETE USER
        deleteUserStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        deleteUserSuccess: (state, action)=>{
            state.isFetching = false
            state.error = false
            state.users.splice(
                state.users.findIndex(item=>item._id === action.payload.id),
                1
            )
        },
        deleteUserFailure: (state, action)=>{
            state.isFetching = false
            state.error = true
        },
        //UPDATE USER
        updateUserStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        updateUserSuccess: (state, action)=>{
            state.isFetching = false
            state.error = false
            state.users[state.users.findIndex(item=>item._id === action.payload.id)] 
                = action.payload.user
        },
        updateUserFailure: (state, action)=>{
            state.isFetching = false
            state.error = true
        },
        //ADD USER
        addUserStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        addUserSuccess: (state, action)=>{
            state.isFetching = false
            state.error = false
            state.users.push(action.payload)
        },
        addUserFailure: (state, action)=>{
            state.isFetching = false
            state.error = true
        }
    }
})

export const {
    loginStart, 
    loginFailure, 
    loginSuccess, 
    logoutUser,
    getUserFailure,
    getUserStart,
    getUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure
} = userSlice.actions
export default userSlice.reducer