// constantes
const dataInicial = {
  name:"pomodoro",
};

// types
const SETEAR = "SETEAR";

// reducer
export default function optionReducer(state = dataInicial, action) {
    console.log(action);
  switch (action.type) {
    case SETEAR:
      return { ...state, name:action.value };
    default:
      return state;
  }
}

// actions
export const timerIncrementarAction = (value) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SETEAR,
      value:value
    });
  } catch (err) {
    console.log(err);
  }
};
