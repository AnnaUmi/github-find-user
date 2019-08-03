import { SET_CURRENT_STEP } from "./actionsType";
const defaultState = {
  currentStep: 0,
  progressStep: 0
};
const schema = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_STEP: {
      return {
        ...state,
        currentStep: action.step
      };
    }
    default:
      return state;
  }
  return state;
};
export default schema;
