import {createSlice} from "@reduxjs/toolkit"

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products:[],
        isFetching: false,
        error: false
    },
    reducers: {
        //GET ALL
        getProductStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        getProductSuccess: (state, action)=>{
            state.isFetching = false
            state.error = false
            state.products = action.payload
        },
        getProductFailure: (state, action)=>{
            state.isFetching = false
            state.error = true
        },
        //DELETE PRODUCT
        deleteProductStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        deleteProductSuccess: (state, action)=>{
            state.isFetching = false
            state.error = false
            state.products.splice(
                state.products.findIndex(item=>item._id === action.payload.id),
                1
            )
        },
        deleteProductFailure: (state, action)=>{
            state.isFetching = false
            state.error = true
        },
        //UPDATE PRODUCT
        updateProductStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        updateProductSuccess: (state, action)=>{
            state.isFetching = false
            state.error = false
            state.products[state.products.findIndex(item=>item._id === action.payload.id)] 
                = action.payload.product
        },
        updateProductFailure: (state, action)=>{
            state.isFetching = false
            state.error = true
        },
        //ADD PRODUCT
        addProductStart: (state)=>{
            state.isFetching = true
            state.error = false
        },
        addProductSuccess: (state, action)=>{
            state.isFetching = false
            state.error = false
            state.products.push(action.payload)
        },
        addProductFailure: (state, action)=>{
            state.isFetching = false
            state.error = true
        }
    }
})

export const {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess
} = productSlice.actions

export default productSlice.reducer