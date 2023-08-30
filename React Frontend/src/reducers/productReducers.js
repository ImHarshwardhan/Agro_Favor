import {
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_RESET,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_RESET,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_SINGLE_REQUEST,
  PRODUCT_FETCH_SINGLE_FAIL,
  PRODUCT_FETCH_SINGLE_RESET,
  PRODUCT_FETCH_SINGLE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
  SUPPLIER_PRODUCT_FETCH_REQUEST,
  SUPPLIER_PRODUCT_FETCH_SUCCESS,
  SUPPLIER_PRODUCT_FETCH_FAIL,
  SUPPLIER_PRODUCT_FETCH_RESET,
  SUPPLIER_CURRENTORDER_FETCH_REQUEST,
  SUPPLIER_CURRENTORDER_FETCH_SUCCESS,
  SUPPLIER_CURRENTORDER_FETCH_FAIL,
  SUPPLIER_CURRENTORDER_FETCH_RESET,
} from '../constants/productConstant';

const initialState = {
  loading: false,
  response: null,
  error: null,
};

export const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ADD_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_ADD_SUCCESS:
      return { ...state, loading: false, response: action.payload };
    case PRODUCT_ADD_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_ADD_RESET:
      return initialState;
    default:
      return state;
  }
};

export const fetchProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_FETCH_SUCCESS:
      return { ...state, loading: false, productresponse: action.payload };
    case PRODUCT_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_FETCH_RESET:
      return initialState;
    default:
      return state;
  }
};

// Similar pattern for other reducers...


// Similar pattern for other reducers...
export const fetchSingleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_SINGLE_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_FETCH_SINGLE_SUCCESS:
      return { ...state, loading: false, response: action.payload };
    case PRODUCT_FETCH_SINGLE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_FETCH_SINGLE_RESET:
      return initialState;
    default:
      return state;
  }
};

export const updateProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { ...state, loading: false, response: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return initialState;
    default:
      return state;
  }
};

export const supplierFetchProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUPPLIER_PRODUCT_FETCH_REQUEST:
      return { ...state, loading: true };
    case SUPPLIER_PRODUCT_FETCH_SUCCESS:
      return { ...state, loading: false, response: action.payload };
    case SUPPLIER_PRODUCT_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SUPPLIER_PRODUCT_FETCH_RESET:
      return initialState;
    default:
      return state;
  }
};

export const supplierFetchCurrentOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUPPLIER_CURRENTORDER_FETCH_REQUEST:
      return { ...state, loading: true };
    case SUPPLIER_CURRENTORDER_FETCH_SUCCESS:
      return { ...state, loading: false, response: action.payload };
    case SUPPLIER_CURRENTORDER_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SUPPLIER_CURRENTORDER_FETCH_RESET:
      return initialState;
    default:
      return state;
  }
};