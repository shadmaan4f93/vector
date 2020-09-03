import { ActionTypes } from '../types';

const INIT_STATE = {

};

export default (state = INIT_STATE, action) => {
  state.actionType = action.type;
  switch (action.type) {
    case ActionTypes.GET_CARD:
      return { ...state, getCardStatus: false, error: false };
    case ActionTypes.GET_CARD_SUCCESS:
      return { ...state, cards: action.payload, getCardStatus: true, error: false };
    case ActionTypes.GET_CARD_ERROR:
      return { ...state, getCardErrorMessage: action.payload, getCardStatus: false, error: true };
    default:
      return { ...state };
  }
};
