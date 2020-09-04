import {
  all, call, fork, put, takeEvery,
} from 'redux-saga/effects';

import axiosInstance  from "../../service/request.js";

import { ActionTypes } from '../types';
import {
  getCardSuccess,
  getCardError,
} from './actions';

const getCardsAsync = () => axiosInstance.get('cards');

function* getCards() {
  try {
    const { data } = yield call(getCardsAsync);
    yield put(getCardSuccess(data));
  } catch (error) {
    yield put(getCardError(error));
  }
}

export function* watchGetCards() {
  yield takeEvery(ActionTypes.GET_CARD, getCards);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetCards)
  ]);
}
