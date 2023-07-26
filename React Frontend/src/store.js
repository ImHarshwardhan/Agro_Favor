import {applyMiddleware, createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//import { userSignupReducer, userSigninReducer } from './reducers/userReducers'
// import { userSignupReducer, userSigninReducer } from './reducers/userReducers'
import { addProductReducer,fetchProductReducer, fetchSingleProductReducer,
    updateProductReducer,supplierFetchProductReducer,
    supplierFetchCurrentOrdersReducer} from './reducers/productReducers'
import { userSignupReducer, userSigninReducer, userUpdateProfileReducer,userProfileReducer } from './reducers/userReducers'
// import { addProductReducer,fetchProductReducer, fetchSingleProductReducer,updateProductReducer} from './reducers/productReducers'
import { addPCategoryReducer,fetchCategoryReducer} from './reducers/categoryReducer'
import { fetchSingleOrderReducer } from './reducers/orderReducer';


const reducer = combineReducers({
    userSignup: userSignupReducer,
    userSignin: userSigninReducer,
    userProfile : userProfileReducer,
    userUpdateProfile : userUpdateProfileReducer,
    addProductReducer : addProductReducer,
    fetchProduct : fetchProductReducer,
    supplierFetchProduct : supplierFetchProductReducer,
    supplierFetchCurrentOrders : supplierFetchCurrentOrdersReducer,
    fetchSingleOrder : fetchSingleOrderReducer,
    fetchSingleProduct : fetchSingleProductReducer,
    updateProduct : updateProductReducer,
    addPCategory : addPCategoryReducer,
    fetchCategory : fetchCategoryReducer,
}) 

let store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(logger, thunk)))

export default store