import { all } from 'redux-saga/effects';
import cardSagas from './card/saga';


export default function* rootSaga() {
  yield all([cardSagas()]);
}
