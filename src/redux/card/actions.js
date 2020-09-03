import { ActionTypes } from '../types';


export const getCard = () => ({
  type: ActionTypes.GET_CARD,
});
export const getCardSuccess = (cards) => ({
  type: ActionTypes.GET_CARD_SUCCESS,
  payload: cards,
});
export const getCardError = (message) => ({
  type: ActionTypes.GET_CARD_ERROR,
  payload: { message },
});