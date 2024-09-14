import { DECREMENT, INCREMENT, RESET } from "../actiontype";


const initialState = {
  counter: 0,
};
export const reducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case RESET:
    return { ...state, counter: 0 };
    default:
      return state;
  }
};
