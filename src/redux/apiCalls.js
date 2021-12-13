import { publicRequest, userRequest } from "../requestMethods"
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux"
import { 
    addUserStart,
    addUserSuccess,
    addUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserFailure, 
    deleteUserStart, 
    deleteUserSuccess, 
    getUserFailure, 
    getUserStart, 
    getUserSuccess, 
    loginFailure, 
    loginStart, 
    loginSuccess, 
    logoutUser } from "./userRedux"

export const login = async(dispatch, user)=>{
    dispatch(loginStart())
    try{
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch(e){
        dispatch(loginFailure())
    }
}

export const getProducts = async(dispatch)=>{
    dispatch(getProductStart())
    try{
        const res = await publicRequest.get("/products")
        console.log(res)
        dispatch(getProductSuccess(res.data))
    }catch(e){
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async(id, dispatch)=>{
    dispatch(deleteProductStart())
    try{
        const res = await userRequest.delete(`/products/${id}`)
        console.log(res)
        dispatch(deleteProductSuccess(id))
    }catch(e){
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async(id, product, dispatch)=>{
    dispatch(updateProductStart())
    try{
        const res = await userRequest.put(`/products/${id}`)
        console.log(res)
        dispatch(updateProductSuccess({id, product}))
    }catch(e){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async(product, dispatch)=>{
    dispatch(addProductStart())
    try{
        const res = await userRequest.post(`/products`, product)
        console.log(res)
        dispatch(addProductSuccess(res.data))
    }catch(e){
        dispatch(addProductFailure())
    }
}

export const logout = async(dispatch)=>{
    dispatch(logoutUser())
}

//GET USER

export const getUsers = async(dispatch)=>{
    dispatch(getUserStart())
    try{
        const res = await userRequest.get("/users")
        console.log(res)
        dispatch(getUserSuccess(res.data))
    }catch(e){
        dispatch(getUserFailure())
    }
}

export const deleteUser = async(id, dispatch)=>{
    dispatch(deleteUserStart())
    try{
        const res = await userRequest.delete(`/users/${id}`)
        console.log(res)
        dispatch(deleteUserSuccess(id))
    }catch(e){
        dispatch(deleteUserFailure())
    }
}

export const updateUser = async(id, user, dispatch)=>{
    dispatch(updateUserStart())
    try{
        const res = await userRequest.put(`/users/${id}`)
        console.log(res)
        dispatch(updateUserSuccess({id, user}))
    }catch(e){
        dispatch(updateUserFailure())
    }
}

export const addUser = async(user, dispatch)=>{
    dispatch(addUserStart())
    try{
        const res = await userRequest.post(`/auth/register`, user)
        console.log(res)
        dispatch(addUserSuccess(res.data))
    }catch(e){
        dispatch(addUserFailure())
    }
}