import { SET_CURRENT_STEP } from "./actionsType";

export const setCurrentStep = step => dispatch => ({
  dispatch({
    type: SET_CURRENT_STEP,
    payload: step
  })
});
