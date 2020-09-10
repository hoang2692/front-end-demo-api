import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";

import {
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_GET_DATA_REQUEST,
    PRODUCT_GET_DATA_SUCCESS
} from "./../types/products";

// lấy tất cả data từ products

function* createProduct({data}) {
console.log(data)
  const res = yield axios.post("https://hoang2692-demo-api.herokuapp.com/api/products", data);
  console.log(res)
  if (res.status === 200) {
    const { data } = res.data;
    yield put({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  }
}

function* createProductRequest() {
  yield takeLatest(PRODUCT_CREATE_REQUEST, createProduct);
}

function* getDataProduct() {
      const res = yield axios.get("https://hoang2692-demo-api.herokuapp.com/api/products");
      console.log(res)
      if (res.status === 200) {
        const  data = res.data;
        yield put({ type: PRODUCT_GET_DATA_SUCCESS, payload: data });
      }
    }
    
    function* getDataProductRequest() {
      yield takeLatest(PRODUCT_GET_DATA_REQUEST, getDataProduct);
    }

export default function* () {
  yield all([createProductRequest(),getDataProductRequest()]);
}
