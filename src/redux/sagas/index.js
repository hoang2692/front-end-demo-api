import {  all } from "redux-saga/effects";
import productAminRun from './productAmin';

export default function* () {
  yield all([productAminRun()]);
}
